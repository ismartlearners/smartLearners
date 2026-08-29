const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'questions.ts');

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Let's do string-based cleanups that specifically fix corrupted LaTeX / escaped parens

  // 1. Control character cleanup (form feeds \x0c, etc.)
  content = content.replace(/\x0c/g, 'f');
  content = content.replace(/[\x00-\x08\x0b\x0e-\x1f]/g, '');

  // 2. Extra double closing delimiters: "\)\)" or "\\)\\)" -> "\)" or "\\)"
  content = content.replace(/\\\)\\\)/g, '\\)');
  content = content.replace(/\\\\\)\\\\\)/g, '\\\\)');

  // 3. Option fraction typos like "\(\\frac{a}{b}\)\)" or "\\(\\frac{a}{b}\\)\\)"
  // e.g. text: "\(\\frac{1}{2,900}\)\)" -> text: "\\(\\frac{1}{2,900}\\)"
  content = content.replace(/"\\\\\(\\frac\{([^}]+)\}\{([^}]+)\}\\\\\)\\\\\)"/g, '"\\\\(\\\\frac{$1}{$2}\\\\)"');
  content = content.replace(/"\(\\frac\{([^}]+)\}\{([^}]+)\}\\\\\)"/g, '"\\\\(\\\\frac{$1}{$2}\\\\)"');
  content = content.replace(/"\(\\frac\{([^}]+)\}\{([^}]+)\}\)"/g, '"\\\\(\\\\frac{$1}{$2}\\\\)"');

  // 4. Broken coordinate / parenthesis delimiters like "\((0, 8\)" -> "\\((0, 8)\\)"
  content = content.replace(/\\\\\(\(([^\)]+)\\\\\)/g, '\\\\(($1)\\\\)');
  content = content.replace(/\\\\\(\(([^\)]+)\)/g, '\\\\(($1)\\\\)');
  content = content.replace(/\(\(([^\)]+)\\\\\)/g, '\\\\(($1)\\\\)');

  // 5. Specific file-level patterns
  if (file === 'test4_math_module1.ts') {
    content = content.replace(/If \\\\\(\\frac\{x\}\{8\}\\\) = 5\\\\\), what is the value of \\\\\(\\frac\{8\}\{x\}\\\\\)\\\)\?/g, 'If \\(\\frac{x}{8} = 5\\), what is the value of \\(\\frac{8}{x}\\)?');
    content = content.replace(/Taking the reciprocal of both sides gives \\\\\(\\frac\{8\}\{x\}\\\) = \\frac\{1\}\{5\}\\\\\)\./g, 'Taking the reciprocal of both sides gives \\(\\frac{8}{x} = \\frac{1}{5}\\).');
    content = content.replace(/slope of \(-?\\frac\{1\}\{3\}\\\) and passes through the point \(9, 10\)/g, 'slope of \\(-\\frac{1}{3}\\) and passes through the point \\((9, 10)\\)');
    content = content.replace(/A right triangle has sides of length \(2sqrt\{2\}\\\), \(6sqrt\{2\}\\\), and \\\(sqrt\{80\}\)\\\) units\./g, 'A right triangle has sides of length \\(2\\sqrt{2}\\), \\(6\\sqrt{2}\\), and \\(\\sqrt{80}\\) units.');
    content = content.replace(/Check hypotenuse: \(\(2sqrt\{2\}\)\^2 \+ \(6\(sqrt\{2\}\)\^2 = 8 \+ 72 = 80 = \(sqrt\{80\}\)\^2\)\. The two legs are \(2sqrt\{2\}\\\) and \(6sqrt\{2\}\\\)\. Area = \\\(frac\{1\}\{2\}\) \\times 2\(sqrt\{2\}\) \\times 6\(sqrt\{2\}\) = 12\\\\\)\./g, 'Check hypotenuse: \\((2\\sqrt{2})^2 + (6\\sqrt{2})^2 = 8 + 72 = 80 = (\\sqrt{80})^2\\). The two legs are \\(2\\sqrt{2}\\) and \\(6\\sqrt{2}\\). Area = \\(\\frac{1}{2} \\times 2\\sqrt{2} \\times 6\\sqrt{2} = 12\\).');
    content = content.replace(/\(x\^2 \+ x\^2 = 58\^2 \\implies 2x\^2 = 3364 \\implies x = 29sqrt\{2\}\\\)\. Perimeter = \(2x \+ 58 = 58 \+ 58sqrt\{2\}\\\)\./g, '\\(x^2 + x^2 = 58^2 \\implies 2x^2 = 3364 \\implies x = 29\\sqrt{2}\\). Perimeter = \\(2x + 58 = 58 + 58\\sqrt{2}\\).');
  }

  if (file === 'test4_math_module2.ts') {
    content = content.replace(/\(\\cos\(K\) = frac\{24\}\{51\}\\\)/g, '\\(\\cos(K) = \\frac{24}{51}\\)');
    content = content.replace(/\(\\cos\(L\)\?/g, '\\(\\cos(L)\\)?');
    content = content.replace(/\(\\cos\(L\) = \\sin\(K\) = frac\{45\}\{51\} = frac\{15\}\{17\}\\\)/g, '\\(\\cos(L) = \\sin(K) = \\frac{45}{51} = \\frac{15}{17}\\)');
  }

  if (file === 'test8_math_module1.ts') {
    content = content.replace(/>\(p = frac\{k\}\{4j \+ 9\}\\\)<\/div>/g, '>\\(p = \\frac{k}{4j + 9}\\)</div>');
    content = content.replace(/"4j \+ 9 = frac\{k\}\{p\}\\\)"/g, '"\\(4j + 9 = \\frac{k}{p}\\)"');
    content = content.replace(/"4j \+ 9 = frac\{p\}\{k\}\\\)"/g, '"\\(4j + 9 = \\frac{p}{k}\\)"');
    content = content.replace(/to get \(4j \+ 9 = frac\{k\}\{p\}\\\)\./g, 'to get \\(4j + 9 = \\frac{k}{p}\\).');
    content = content.replace(/\(wsqrt\{3\}\\\)/g, '\\(w\\sqrt{3}\\)');
    content = content.replace(/\(R = frac\{s\}\{sqrt\{3\}\)\}\) = \(frac\{284\}\{sqrt\{3\}\)\} = \(frac\{284\}\{3\}\)\(sqrt\{3\}\)\./g, '\\(R = \\frac{s}{\\sqrt{3}} = \\frac{284}{\\sqrt{3}} = \\frac{284\\sqrt{3}}{3}\\).');
    content = content.replace(/Since \(R = wsqrt\{3\}\\\), \(w = frac\{284\}\{3\}\\\)\./g, 'Since \\(R = w\\sqrt{3}\\), \\(w = \\frac{284}{3}\\).');
  }

  if (file === 'test8_math_module2.ts') {
    content = content.replace(/If \\\\\(\\frac\{x\}\{y\}\\\) = 4\\\\\)/g, 'If \\(\\frac{x}{y} = 4\\)');
    content = content.replace(/and \\\\\(\\frac\{24x\}\{ny\}\\\) = 4\\\\\)/g, 'and \\(\\frac{24x}{ny} = 4\\)');
    content = content.replace(/\\\\\(\\angle ROS\\\\\)\\\\\)/g, '\\(\\angle ROS\\)');
    content = content.replace(/\\\\\(\\angle RSO\\\\\)\\\\\)/g, '\\(\\angle RSO\\)');
    content = content.replace(/\\\\\(\\angle RSO\\\) = \\\\\(\\frac\{180\^\\circ - 88\^\\circ\}\{2\}\\\) = \\\\\(\\frac\{92\^\\circ\}\{2\}\\\) = 46\^\\circ\\\\\)\./g, '\\(\\angle RSO = \\frac{180^\\circ - 88^\\circ}{2} = \\frac{92^\\circ}{2} = 46^\\circ\\).');
    content = content.replace(/Volume of sphere = \\\\\(\\frac\{4\}\{3\}\\\\\)\\\\pi \(34\)\^3 \\\\approx 164,636\.2\\\\\)\./g, 'Volume of sphere = \\(\\frac{4}{3}\\pi (34)^3 \\approx 164,636.2\\).');
    content = content.replace(/\\\\\(\\angle Q\\\\\)\\\\\)/g, '\\(\\angle Q\\)');
    content = content.replace(/\\\\\(\\angle N\\\\\)\\\\\)/g, '\\(\\angle N\\)');
    content = content.replace(/\\\\\(\\angle M\\\) = \\\\\(\\angle Q\\\) = t\^\\circ\\\\\)\. In right triangle LMN, \\\\\(\\angle N\\\) = 90\^\\circ - \\\\\(\\angle M\\\) = \(90 - t\)\^\\circ\\\\\)\./g, '\\(\\angle M = \\angle Q = t^\\circ\\). In right triangle LMN, \\(\\angle N = 90^\\circ - \\angle M = (90 - t)^\\circ\\).');
    content = content.replace(/\\\\\(\\frac\{x\^2\}\{\\\\sqrt\{x\^2 - c\^2\}\\\)\}\\\) = \\\\\(\\frac\{c\^2\}\{\\sqrt\{x\^2 - c\^2\}\\\)\} \+ 39\\\\\)/g, '\\(\\frac{x^2}{\\sqrt{x^2 - c^2}} = \\frac{c^2}{\\sqrt{x^2 - c^2}} + 39\\)');
  }

  if (file === 'test9_math_module1.ts') {
    content = content.replace(/"y = \\frac\{px\}\{57\}\\\\\)"/g, '"\\(y = \\frac{px}{57}\\)"');
    content = content.replace(/"S = \\frac\{w\}\{170\}\\\\\)"/g, '"\\(S = \\frac{w}{170}\\)"');
    content = content.replace(/"S = \\frac\{w\}\{85\}\\\\\)"/g, '"\\(S = \\frac{w}{85}\\)"');
    content = content.replace(/Staining twice requires \(2w\) sq ft\. \(S = \\frac\{2w\}\{170\}\) = \(\\frac\{w\}\{85\}\)\./g, 'Staining twice requires \\(2w\\) sq ft. \\(S = \\frac{2w}{170} = \\frac{w}{85}\\).');
    content = content.replace(/Total population multiplier = \\\\\(\\frac\{6424\}\{803\}\\\) = 8\\\\\)\./g, 'Total population multiplier = \\(\\frac{6424}{803} = 8\\).');
    content = content.replace(/Area ratio = \\\\\(\\frac\{1450\}\{58\}\\\) = 25 \\\\Rightarrow k = 5\\\\\)\. Volume ratio = \(5\^3 = 125\)\. Volume X = \\\\\(\\frac\{1250\}\{125\}\\\) = 10\\\\\)\./g, 'Area ratio = \\(\\frac{1450}{58} = 25 \\implies k = 5\\). Volume ratio = \\(5^3 = 125\\). Volume X = \\(\\frac{1250}{125} = 10\\).');
  }

  if (file === 'test9_math_module2.ts') {
    content = content.replace(/Probability = \\\\\(\\frac\{107\}\{135\}\\\\\)\\\\\)\./g, 'Probability = \\(\\frac{107}{135}\\).');
    content = content.replace(/slope of \\\\\(\\frac\{1\}\{9\}\\\\\)\\\\\) and passes through the point \(\(0, 14\)/g, 'slope of \\(\\frac{1}{9}\\) and passes through the point \\((0, 14)\\)');
    content = content.replace(/"y = -\\frac\{1\}\{9\}\)x - 14\)"/g, '"\\(y = -\\frac{1}{9}x - 14\\)"');
    content = content.replace(/"y = -\\frac\{1\}\{9\}\)x \+ 14\)"/g, '"\\(y = -\\frac{1}{9}x + 14\\)"');
    content = content.replace(/"y = \\frac\{1\}\{9\}\)x - 14\)"/g, '"\\(y = \\frac{1}{9}x - 14\\)"');
    content = content.replace(/"y = \\frac\{1\}\{9\}\)x \+ 14\)"/g, '"\\(y = \\frac{1}{9}x + 14\\)"');
    content = content.replace(/Here slope \(m = \\frac\{1\}\{9\}\\\\\) and y-intercept \(b = 14\), so \(y = \\frac\{1\}\{9\}\)x \+ 14\)\./g, 'Here slope \\(m = \\frac{1}{9}\\) and y-intercept \\(b = 14\\), so \\(y = \\frac{1}{9}x + 14\\).');
    content = content.replace(/>\(f\(x\) = x \+ \\frac\{8\}\{11\}\\\\\)<\/div>/g, '>\\(f(x) = x + \\frac{8}{11}\\)</div>');
    content = content.replace(/value of \(f\(x\) when \(x = \\frac\{3\}\{11\}\\\\\)\?/g, 'value of \\(f(x)\\) when \\(x = \\frac{3}{11}\\)?');
    content = content.replace(/f\(\\frac\{3\}\{11\}\) = \(\\frac\{3\}\{11\}\) \+ \(\\frac\{8\}\{11\}\) = \(\\frac\{11\}\{11\}\) = 1\)\./g, '\\(f\\left(\\frac{3}{11}\\right) = \\frac{3}{11} + \\frac{8}{11} = \\frac{11}{11} = 1\\).');
    content = content.replace(/Growth multiplier per year = \\\\\(\\frac\{606\.42\}\{604\.00\}\\\) = 1\.004 = 1 \+ 0\.004\\\\\)\./g, 'Growth multiplier per year = \\(\\frac{606.42}{604.00} = 1.004 = 1 + 0.004\\).');
    content = content.replace(/If \(\\\\sin F = \\frac\{308\}\{317\}\\\\\), what is the value of \(\\\\sin J\)\?/g, 'If \\(\\sin F = \\frac{308}{317}\\), what is the value of \\(\\sin J\\)?');
    content = content.replace(/and \(\\\\sin孔J = \\\\sin F = \\frac\{308\}\{317\}\\\\\)\./g, 'and \\(\\sin J = \\sin F = \\frac{308}{317}\\).');
    content = content.replace(/measure of \\\\\(\\angle Z\\\\\)\\\\\) is/g, 'measure of \\(\\angle Z\\) is');
    content = content.replace(/measure of \\\\\(\\angle T\\\\\)\\\\\)\?/g, 'measure of \\(\\angle T\\)?');
    content = content.replace(/>\(f\(t\) = 60\{,\}000\(2\)\^\{\\frac\{t\}\{410\}\\\)\}\)<\/div>/g, '>\\(f(t) = 60{,}000(2)^{\\frac{t}{410}}\\)</div>');
    content = content.replace(/The function \(f\(t\) = 60\{,\}000\(2\)\^\{\\frac\{t\}\{410\}\\\)\}\) gives/g, 'The function \\(f(t) = 60{,}000(2)^{\\frac{t}{410}}\\) gives');
    content = content.replace(/exponent is \\\\\(\\frac\{t\}\{410\}\\\\\)\\\\\), meaning/g, 'exponent is \\(\\frac{t}{410}\\), meaning');
    content = content.replace(/"20\\\\sqrt\{2\}\\\)"/g, '"\\(20\\sqrt{2}\\)"');
    content = content.replace(/Which expression is equivalent to \\\\\(\\frac\{y \+ 12\}\{x - 8\}\\\) \+ \(\\\\frac\{y\(x - 8\)\}\{x\^2y - 8xy\}\\\\\)\\\\\)\?/g, 'Which expression is equivalent to \\(\\frac{y + 12}{x - 8} + \\frac{y(x - 8)}{x^2y - 8xy}\\)?');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
