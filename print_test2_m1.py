import re

with open("src/data/test2_math_module1.ts") as f:
    content = f.read()

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
    
    print(f"ModQ{idx:2d} (ID {q_id}) | CA: {ca_val} | Opts: {opt_texts}")
    print(f"   QT: {qt_clean}")
    print(f"   EXPL: {expl[:120]}\n")
