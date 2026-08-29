import re, glob

files = [
    ("Test 1 Math Mod 1", "src/data/math_module1.ts"),
    ("Test 1 Math Mod 2", "src/data/math_module2.ts"),
    ("Test 2 Math Mod 1", "src/data/test2_math_module1.ts"),
    ("Test 2 Math Mod 2", "src/data/test2_math_module2.ts")
]

for label, fn in files:
    with open(fn) as f:
        content = f.read()
    
    print(f"\n==================================================")
    print(f"{label} ({fn})")
    print(f"==================================================")
    
    # find all question blocks
    raw_qs = re.findall(r"(\{\s*id:\s*(\d+)[\s\S]*?\n\s*\})", content)
    for q_tuple in raw_qs:
        block = q_tuple[0]
        q_id = q_tuple[1]
        
        ca_m = re.search(r"correctAnswer:\s*[\"\']([^\"\']+)[\"\']", block)
        ca_val = ca_m.group(1) if ca_m else ""
        
        opts = re.findall(r"\{\s*id:\s*\"([A-D])\",\s*text:\s*[`\"\']([^`\"\']+)[`\"\']\s*\}", block)
        opt_texts = [t[1] for t in opts]
        
        expl_m = re.search(r"explanation:\s*[`\"\']([\s\S]*?)[`\"\']", block)
        expl = expl_m.group(1) if expl_m else ""
        
        qt_m = re.search(r"questionText:\s*[`\"\']([\s\S]*?)[`\"\']", block)
        qt = qt_m.group(1) if qt_m else ""
        qt_clean = re.sub(r"<[^>]+>", "", qt).replace("\n", " ").strip()
        
        # Check if options look like 4 simple numbers (e.g. ['25', '26', '27', '28'] or ['21', '28', '32', '35'] or ['6', '10', '60', '150'])
        # Or if options are empty
        is_num_opts = len(opt_texts) == 4 and all(re.match(r"^\\?\(?-?\d+(\.\d+)?\\?\)?$", o.replace("{","").replace("}","").replace(",","")) for o in opt_texts)
        
        print(f"ID {q_id:3s} | CA: {ca_val:5s} | Opts: {opt_texts}")
        print(f"   QT: {qt_clean[:80]}")
