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
    
    # split by question objects
    # find all { id: <num>, type: "Math", ... }
    raw_qs = re.split(r"\{\s*id:\s*(\d+),\s*type:\s*[\"']Math[\"']", content)
    
    # raw_qs[0] is preamble, then pairs of (q_id, body)
    for i in range(1, len(raw_qs), 2):
        q_id = raw_qs[i]
        body = raw_qs[i+1]
        
        ca_m = re.search(r"correctAnswer:\s*[\"\']([^\"\']+)[\"\']", body)
        ca_val = ca_m.group(1) if ca_m else ""
        
        # Check options
        opts_m = re.search(r"options:\s*\[([\s\S]*?)\]\s*,", body)
        opts_raw = opts_m.group(1) if opts_m else ""
        opts = re.findall(r"\{\s*id:\s*\"([A-D])\",\s*text:\s*[`\"\']([^`\"\']+)[`\"\']\s*\}", opts_raw)
        opt_texts = [t[1] for t in opts]
        
        # Check explanation
        expl_m = re.search(r"explanation:\s*[`\"\']([\s\S]*?)[`\"\']\s*,?\s*\n", body)
        expl_val = expl_m.group(1) if expl_m else ""
        
        # Check question text
        qt_m = re.search(r"questionText:\s*[`\"\']([\s\S]*?)[`\"\']\s*,", body)
        qt = qt_m.group(1) if qt_m else ""
        qt_clean = re.sub(r"<[^>]+>", "", qt).replace("\n", " ").strip()
        
        # Determine if this looks like an SPR (e.g., options are empty, or options look fabricated, or explanation gives exact numerical answer like "25" or "10")
        is_empty_opts = len(opts) == 0
        
        print(f"Q{q_id:3s} | CA: {ca_val:10s} | Opts: {opt_texts} | Text: {qt_clean[:70]}")
