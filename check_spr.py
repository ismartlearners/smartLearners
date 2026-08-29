import glob
import re

files = [
    "src/data/math_module1.ts",
    "src/data/math_module2.ts",
    "src/data/test2_math_module1.ts",
    "src/data/test2_math_module2.ts"
]

for fn in files:
    with open(fn) as f:
        content = f.read()
    
    print("=== FILE:", fn, "===")
    blocks = re.findall(r"(\{\s*id:\s*\d+[\s\S]*?\n\s*\})", content)
    for block in blocks:
        q_id = re.search(r"id:\s*(\d+)", block).group(1)
        ca_m = re.search(r"correctAnswer:\s*[\"\']([^\"\']+)[\"\']", block)
        ca_val = ca_m.group(1) if ca_m else ""
        expl_m = re.search(r"explanation:\s*[`\"\']([\s\S]*?)[`\"\']", block)
        expl_val = expl_m.group(1) if expl_m else ""
        opts = re.findall(r"\{\s*id:\s*\"([A-D])\",\s*text:\s*[`\"\']([^`\"\']+)[`\"\']\s*\}", block)
        
        opt_texts = [t[1] for t in opts]
        
        qt_m = re.search(r"questionText:\s*[`\"\']([\s\S]*?)[`\"\']", block)
        qt = qt_m.group(1) if qt_m else ""
        qt_clean = re.sub(r"<[^>]+>", "", qt)[:60].replace("\n", " ")
        
        print(f"Q{q_id:3s} | Ans: {ca_val:5s} | Opts: {opt_texts} | QT: {qt_clean}")
