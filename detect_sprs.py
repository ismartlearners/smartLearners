import glob, re

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
    
    blocks = re.findall(r"(\{\s*id:\s*\d+[\s\S]*?\n\s*\})", content)
    for idx, block in enumerate(blocks, 1):
        q_id = re.search(r"id:\s*(\d+)", block).group(1)
        ca_m = re.search(r"correctAnswer:\s*[\"\']([^\"\']+)[\"\']", block)
        ca_val = ca_m.group(1) if ca_m else ""
        
        opts = re.findall(r"\{\s*id:\s*\"([A-D])\",\s*text:\s*[`\"\']([^`\"\']+)[`\"\']\s*\}", block)
        opt_texts = [t[1] for t in opts]
        
        expl_m = re.search(r"explanation:\s*[`\"\']([\s\S]*?)[`\"\']", block)
        expl = expl_m.group(1) if expl_m else ""
        
        qt_m = re.search(r"questionText:\s*[`\"\']([\s\S]*?)[`\"\']", block)
        qt = qt_m.group(1) if qt_m else ""
        qt_clean = re.sub(r"<[^>]+>", "", qt).replace("\n", " ").strip()
        
        # Look for clues in explanation or options
        # e.g., explanation saying "The correct answer is 25." or "The correct answer is 7."
        # or options looking like manufactured integers
        print(f"ModQ{idx:2d} (ID {q_id:3s}) | Ans: {ca_val:5s} | Opts: {opt_texts}")
        print(f"   Expl excerpt: {expl[:100]}...")
