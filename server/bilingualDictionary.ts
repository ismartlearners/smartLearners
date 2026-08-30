// SAT Bilingual Vocabulary Fallback Dictionary and Helpers
import { GoogleGenAI } from "@google/genai";

export interface BilingualWordEntry {
  word: string;
  partOfSpeech: string;
  partOfSpeechVi: string;
  phonetic: string;
  definitionEn: string;
  definitionVi: string;
  contextMeaningEn?: string;
  contextMeaningVi?: string;
  exampleEn: string;
  exampleVi: string;
  synonyms: string[];
}

let geminiClient: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) return null;
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return geminiClient;
}

export const COMMON_SAT_BILINGUAL_VOCAB: Record<string, BilingualWordEntry> = {
  popular: {
    word: "popular",
    partOfSpeech: "adjective / noun",
    partOfSpeechVi: "tính từ / danh từ",
    phonetic: "/ˈpɑː.pjə.lɚ/",
    definitionEn: "Liked, admired, or enjoyed by many people or by a particular group; a person who is widely liked and celebrated.",
    definitionVi: "Được nhiều người yêu thích, ngưỡng mộ hoặc đón nhận; người nổi tiếng, được ưa chuộng (đặc biệt ở trường học hoặc cộng đồng).",
    contextMeaningEn: "In the passage: 'Franklin was very popular in France.'",
    contextMeaningVi: "Trong đoạn trích: 'Franklin rất được lòng, nổi tiếng và được ngưỡng mộ tại nước Pháp.'",
    exampleEn: "Benjamin Franklin was exceptionally popular among Parisian intellectuals and citizens alike.",
    exampleVi: "Benjamin Franklin cực kỳ nổi tiếng và được mến mộ trong giới trí thức cũng như người dân Paris.",
    synonyms: ["well-liked", "celebrated", "admired", "renowned", "famed", "esteemed"]
  },
  popularity: {
    word: "popularity",
    partOfSpeech: "noun",
    partOfSpeechVi: "danh từ",
    phonetic: "/ˌpɑː.pjəˈler.ə.t̬i/",
    definitionEn: "The state or condition of being liked, admired, or supported by many people.",
    definitionVi: "Sự nổi tiếng, sự yêu thích rộng rãi hoặc sự ủng hộ của đông đảo quần chúng.",
    contextMeaningEn: "Refers to broad public acclaim or widespread acceptance in historical/social texts.",
    contextMeaningVi: "Chỉ sự hoan nghênh rộng rãi của công chúng hoặc sự đón nhận phổ biến trong văn bản.",
    exampleEn: "His soaring popularity bolstered his influence across European diplomatic circles.",
    exampleVi: "Sự nổi tiếng ngày càng tăng đã củng cố tầm ảnh hưởng của ông trong giới ngoại giao châu Âu.",
    synonyms: ["fame", "acclaim", "prestige", "prominence", "favor"]
  },
  significant: {
    word: "significant",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/sɪɡˈnɪf.ə.kənt/",
    definitionEn: "That which has significance; sufficiently great or important to be worthy of attention; a sign, token, or symbol.",
    definitionVi: "Có ý nghĩa; quan trọng, đáng chú ý; mang tính biểu thị hoặc tượng trưng.",
    contextMeaningEn: "In SAT reading passages, often denotes statistically meaningful data or consequential turning points.",
    contextMeaningVi: "Trong bài đọc SAT, thường biểu thị dữ liệu có ý nghĩa thống kê hoặc bước ngoặt mang tính quyết định.",
    exampleEn: "The discovery represents a significant breakthrough in renewable energy research.",
    exampleVi: "Phát hiện này đại diện cho một bước đột phá có ý nghĩa quan trọng trong nghiên cứu năng lượng tái tạo.",
    synonyms: ["meaningful", "momentous", "notable", "consequential", "substantial"]
  },
  scrupulous: {
    word: "scrupulous",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/ˈskruː.pjə.ləs/",
    definitionEn: "Extremely attentive to details, precise, and guided by strict moral integrity.",
    definitionVi: "Cực kỳ tỉ mỉ, cẩn trọng từng chi tiết; liêm chính và có nguyên tắc đạo đức cao.",
    contextMeaningEn: "Often used in SAT reading to describe rigorous research methodologies or ethical decision-making.",
    contextMeaningVi: "Thường dùng trong bài đọc SAT để mô tả phương pháp nghiên cứu chặt chẽ hoặc hành vi đạo đức chuẩn mực.",
    exampleEn: "The researcher maintained scrupulous records throughout the multi-year study.",
    exampleVi: "Nhà nghiên cứu đã duy trì các ghi chép tỉ mỉ và cẩn trọng trong suốt nghiên cứu nhiều năm.",
    synonyms: ["meticulous", "painstaking", "conscientious", "rigorous"]
  },
  meticulous: {
    word: "meticulous",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/məˈtɪk.jə.ləs/",
    definitionEn: "Showing immense care and precision; extremely attentive to detail.",
    definitionVi: "Tỉ mỉ, cẩn thận từng li từng tí, chú ý chi tiết.",
    contextMeaningEn: "Refers to high standards of execution or careful empirical examination.",
    contextMeaningVi: "Ám chỉ tiêu chuẩn thực hiện rất cao hoặc sự khảo sát thực nghiệm kỹ lưỡng.",
    exampleEn: "Her meticulous editing transformed the rough draft into an award-winning essay.",
    exampleVi: "Việc biên tập tỉ mỉ của cô ấy đã biến bản nháp sơ sài thành một bài luận đoạt giải.",
    synonyms: ["precise", "thorough", "exacting", "punctilious"]
  },
  pragmatic: {
    word: "pragmatic",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/præɡˈmæt.ɪk/",
    definitionEn: "Dealing with problems in a practical, realistic way rather than following theoretical ideals.",
    definitionVi: "Thực tế, thực dụng; giải quyết vấn đề dựa trên hiệu quả thực tiễn thay vì lý thuyết suông.",
    contextMeaningEn: "In SAT policy/history passages, denotes sensible problem-solving based on concrete outcomes.",
    contextMeaningVi: "Trong bài đọc lịch sử/chính sách SAT, biểu thị việc giải quyết vấn đề hợp lý dựa trên kết quả thực tế.",
    exampleEn: "The city council took a pragmatic approach to budget allocation during the fiscal crisis.",
    exampleVi: "Hội đồng thành phố đã áp dụng cách tiếp cận thực tế đối với việc phân bổ ngân sách trong cuộc khủng hoảng tài chính.",
    synonyms: ["practical", "sensible", "realistic", "utilitarian"]
  },
  substantiate: {
    word: "substantiate",
    partOfSpeech: "verb",
    partOfSpeechVi: "động từ",
    phonetic: "/səbˈstæn.ʃi.eɪt/",
    definitionEn: "To provide solid evidence or proof to support and validate a claim or hypothesis.",
    definitionVi: "Chứng minh, xác thực, cung cấp bằng chứng vững chắc để chứng minh một tuyên bố.",
    contextMeaningEn: "A cornerstone SAT Reading question type regarding whether authors cite evidence to back their thesis.",
    contextMeaningVi: "Dạng câu hỏi trọng tâm trong SAT Reading kiểm tra xem tác giả có dẫn chứng chứng minh luận điểm hay không.",
    exampleEn: "The biologist conducted three independent experiments to substantiate her initial findings.",
    exampleVi: "Nhà sinh vật học đã tiến hành ba thí nghiệm độc lập để xác thực những phát hiện ban đầu của mình.",
    synonyms: ["corroborate", "validate", "verify", "authenticate"]
  },
  undermine: {
    word: "undermine",
    partOfSpeech: "verb",
    partOfSpeechVi: "động từ",
    phonetic: "/ˌʌn.dəˈmaɪn/",
    definitionEn: "To weaken or damage the foundation, credibility, or effectiveness of something gradually.",
    definitionVi: "Làm suy yếu, hủy hoại dần dần nền tảng hoặc độ tin cậy của điều gì đó.",
    contextMeaningEn: "Commonly tested when examining counterarguments that challenge a study's main claim.",
    contextMeaningVi: "Thường gặp khi phân tích các luận điểm phản bác làm lung lay kết luận chính của nghiên cứu.",
    exampleEn: "Recent contradictory findings threaten to undermine the prevailing economic theory.",
    exampleVi: "Những phát hiện trái ngược gần đây đe dọa làm suy yếu lý thuyết kinh tế đang thịnh hành.",
    synonyms: ["weaken", "compromise", "sabotage", "subvert"]
  },
  ambiguous: {
    word: "ambiguous",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/æmˈbɪɡ.ju.əs/",
    definitionEn: "Open to more than one interpretation; unclear or having a double meaning.",
    definitionVi: "Mơ hồ, nhập nhằng, có thể hiểu theo nhiều nghĩa khác nhau; không rõ ràng.",
    contextMeaningEn: "Describes vague phrasing or uncommitted positions in rhetorical analysis.",
    contextMeaningVi: "Mô tả cách diễn đạt mơ hồ hoặc quan điểm chưa dứt khoát trong phân tích văn bản.",
    exampleEn: "The contract contained ambiguous language that led to a dispute between the partners.",
    exampleVi: "Hợp đồng chứa đựng ngôn từ mơ hồ dẫn đến tranh chấp giữa các đối tác.",
    synonyms: ["equivocal", "vague", "obscure", "indefinite"]
  },
  ubiquitous: {
    word: "ubiquitous",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/juːˈbɪk.wɪ.təs/",
    definitionEn: "Present, appearing, or found everywhere simultaneously.",
    definitionVi: "Có mặt ở khắp mọi nơi, phổ biến rộng rãi cùng một lúc.",
    contextMeaningEn: "Frequently used in science & technology passages to describe widespread phenomena or devices.",
    contextMeaningVi: "Thường dùng trong các bài đọc khoa học & công nghệ để chỉ các hiện tượng hoặc thiết bị có mặt khắp nơi.",
    exampleEn: "Smartphones have become ubiquitous across modern society in under two decades.",
    exampleVi: "Điện thoại thông minh đã trở nên phổ biến ở khắp mọi nơi trong xã hội hiện đại chỉ trong vòng chưa đầy hai thập kỷ.",
    synonyms: ["omnipresent", "pervasive", "universal", "widespread"]
  },
  candid: {
    word: "candid",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/ˈkæn.dɪd/",
    definitionEn: "Truthful, straightforward, and frank in speech or expression.",
    definitionVi: "Thẳng thắn, bộc trực, chân thành và không giấu giếm.",
    contextMeaningEn: "Characterizes an author's tone when speaking with unvarnished honesty.",
    contextMeaningVi: "Đặc trưng cho giọng văn của tác giả khi phát biểu với sự thẳng thắn, chân thực.",
    exampleEn: "The author gave a candid reflection on the challenges she faced during her presidency.",
    exampleVi: "Tác giả đã có một suy ngẫm thẳng thắn về những thách thức mà bà phải đối mặt trong nhiệm kỳ tổng thống của mình.",
    synonyms: ["frank", "honest", "forthright", "unreserved"]
  },
  plausible: {
    word: "plausible",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/ˈplɔː.zə.bəl/",
    definitionEn: "Seeming reasonable, probable, or worthy of belief based on available evidence.",
    definitionVi: "Hợp lý, đáng tin cậy, có vẻ đúng dựa trên bằng chứng hiện có.",
    contextMeaningEn: "Used to describe hypotheses or explanations that fit observations well.",
    contextMeaningVi: "Dùng để mô tả các giả thuyết hoặc lời giải thích phù hợp với quan sát thực tế.",
    exampleEn: "The geologist presented a plausible explanation for the sudden shift in seismic activity.",
    exampleVi: "Nhà địa chất đã đưa ra một lời giải thích hợp lý cho sự thay đổi đột ngột trong hoạt động địa chấn.",
    synonyms: ["credible", "believable", "feasible", "tenable"]
  },
  resilient: {
    word: "resilient",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/rɪˈzɪl.jənt/",
    definitionEn: "Able to withstand or recover quickly from difficult conditions, shocks, or trauma.",
    definitionVi: "Kiên cường, bền bỉ, có khả năng phục hồi nhanh chóng sau khó khăn hoặc nghịch cảnh.",
    contextMeaningEn: "Describes ecosystems, economies, or individuals that bounce back from stress.",
    contextMeaningVi: "Mô tả hệ sinh thái, nền kinh tế hoặc cá nhân phục hồi mạnh mẽ sau áp lực.",
    exampleEn: "The coastal community proved resilient after rebuilding rapidly following the storm.",
    exampleVi: "Cộng đồng ven biển đã chứng tỏ sự kiên cường khi nhanh chóng tái thiết sau cơn bão.",
    synonyms: ["adaptable", "durable", "buoyant", "tenacious"]
  },
  nuance: {
    word: "nuance",
    partOfSpeech: "noun",
    partOfSpeechVi: "danh từ",
    phonetic: "/ˈnjuː.ɑːns/",
    definitionEn: "A subtle difference in meaning, expression, sound, or shade of color.",
    definitionVi: "Sắc thái tinh tế, sự khác biệt nhỏ nhặt nhưng quan trọng trong ý nghĩa hoặc cảm xúc.",
    contextMeaningEn: "Crucial for SAT paired questions that require detecting slight differences in authors' attitudes.",
    contextMeaningVi: "Rất quan trọng trong các câu hỏi SAT yêu cầu nhận biết sự khác biệt tinh tế trong thái độ của tác giả.",
    exampleEn: "The translator skillfully preserved every emotional nuance of the original poem.",
    exampleVi: "Người dịch đã khéo léo giữ trọn vẹn từng sắc thái cảm xúc của bài thơ gốc.",
    synonyms: ["subtlety", "refinement", "distinction", "undertone"]
  },
  eloquent: {
    word: "eloquent",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/ˈel.ə.kwənt/",
    definitionEn: "Fluent, persuasive, and vividly expressive in speaking or writing.",
    definitionVi: "Hùng biện, truyền cảm, lưu loát và có sức thuyết phục cao trong lời nói hoặc câu văn.",
    contextMeaningEn: "Often describes historical speeches or powerful rhetorical passages in SAT Reading.",
    contextMeaningVi: "Thường dùng để mô tả các bài phát biểu lịch sử hoặc đoạn văn giàu sức thuyết phục trong SAT.",
    exampleEn: "Her eloquent testimony swayed the jury and brought international attention to the issue.",
    exampleVi: "Lời khai hùng hồn và truyền cảm của cô ấy đã thuyết phục bồi thẩm đoàn và thu hút sự chú ý quốc tế.",
    synonyms: ["articulate", "persuasive", "expressive", "fluent"]
  },
  advocate: {
    word: "advocate",
    partOfSpeech: "verb / noun",
    partOfSpeechVi: "động từ / danh từ",
    phonetic: "/ˈæd.və.keɪt/",
    definitionEn: "To publicly recommend or support a particular cause or policy.",
    definitionVi: "Ủng hộ, tán thành, chủ trương một chính sách hoặc mục tiêu công khai.",
    contextMeaningEn: "Commonly tests an author's stance or main thesis in political and social essays.",
    contextMeaningVi: "Thường kiểm tra lập trường hoặc luận điểm chính của tác giả trong các bài luận xã hội.",
    exampleEn: "The environmentalist campaigned relentlessly to advocate for renewable energy transition.",
    exampleVi: "Nhà hoạt động môi trường đã vận động không ngừng nghỉ để ủng hộ quá trình chuyển đổi sang năng lượng tái tạo.",
    synonyms: ["champion", "endorse", "promote", "proponent"]
  },
  refute: {
    word: "refute",
    partOfSpeech: "verb",
    partOfSpeechVi: "động từ",
    phonetic: "/rɪˈfjuːt/",
    definitionEn: "To prove a statement, theory, or claim to be wrong or false using evidence.",
    definitionVi: "Bác bỏ, phản bác và chứng minh một tuyên bố hoặc lý thuyết là sai.",
    contextMeaningEn: "Used in comparative passages when Author B directly disproves Author A's hypothesis.",
    contextMeaningVi: "Dùng trong các đoạn văn so sánh khi Tác giả B bác bỏ trực tiếp giả thuyết của Tác giả A.",
    exampleEn: "The chemist published data that definitively refuted the rival laboratory's hypothesis.",
    exampleVi: "Nhà hóa học đã công bố dữ liệu bác bỏ dứt khoát giả thuyết của phòng thí nghiệm đối thủ.",
    synonyms: ["disprove", "debunk", "invalidate", "rebut"]
  },
  aesthetic: {
    word: "aesthetic",
    partOfSpeech: "adjective / noun",
    partOfSpeechVi: "tính từ / danh từ",
    phonetic: "/esˈθet.ɪk/",
    definitionEn: "Concerned with beauty, art, or the appreciation of good taste.",
    definitionVi: "Thuộc về thẩm mỹ, tính thẩm mỹ, nghệ thuật và vẻ đẹp.",
    contextMeaningEn: "Appears frequently in literature, architecture, and art criticism passages.",
    contextMeaningVi: "Xuất hiện thường xuyên trong các bài đọc về văn học, kiến trúc và phê bình nghệ thuật.",
    exampleEn: "The architect balanced functional efficiency with refined aesthetic appeal.",
    exampleVi: "Kiến trúc sư đã cân bằng giữa hiệu quả công năng với sức hấp dẫn thẩm mỹ tinh tế.",
    synonyms: ["artistic", "tasteful", "stylish", "visual"]
  },
  indifferent: {
    word: "indifferent",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/ɪnˈdɪf.ər.ənt/",
    definitionEn: "Having no particular interest or sympathy; unconcerned or neutral.",
    definitionVi: "Thờ ơ, lãnh đạm, dửng dưng; không quan tâm hoặc trung lập.",
    contextMeaningEn: "A frequent SAT tone answer choice representing neutral or detached attitude.",
    contextMeaningVi: "Lựa chọn thường gặp về thái độ tác giả biểu thị sự trung lập hoặc không màng tới.",
    exampleEn: "The committee remained indifferent to public protests, voting in favor of the zoning change.",
    exampleVi: "Ủy ban vẫn thờ ơ trước các cuộc biểu tình của công chúng, bỏ phiếu thông qua thay đổi quy hoạch.",
    synonyms: ["unconcerned", "apathetic", "detached", "nonchalant"]
  },
  ephemeral: {
    word: "ephemeral",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/ɪˈfem.ər.əl/",
    definitionEn: "Lasting for a very short time; fleeting or transitory.",
    definitionVi: "Phù du, chóng tàn, chỉ tồn tại trong một khoảng thời gian rất ngắn ngủi.",
    contextMeaningEn: "Often describes temporary ecological states or fleeting emotional moments in literature.",
    contextMeaningVi: "Thường dùng để mô tả trạng thái sinh thái tạm thời hoặc cảm xúc thoáng qua trong văn học.",
    exampleEn: "The desert bloom is an ephemeral phenomenon, vanishing within days of rain.",
    exampleVi: "Sự nở hoa trên sa mạc là một hiện tượng phù du, biến mất chỉ vài ngày sau cơn mưa.",
    synonyms: ["fleeting", "transient", "momentary", "evanescent"]
  },
  scrutinize: {
    word: "scrutinize",
    partOfSpeech: "verb",
    partOfSpeechVi: "động từ",
    phonetic: "/ˈskruː.tɪ.naɪz/",
    definitionEn: "To examine or inspect closely and thoroughly with critical attention.",
    definitionVi: "Xem xét, kiểm tra kỹ lưỡng và cẩn trọng từng chi tiết.",
    contextMeaningEn: "Used when scientists or critics deeply investigate claims, manuscripts, or data.",
    contextMeaningVi: "Dùng khi các nhà khoa học hoặc nhà phê bình điều tra sâu các tuyên bố, tài liệu hoặc dữ liệu.",
    exampleEn: "Scholars will scrutinize the newly discovered manuscript before drawing conclusions.",
    exampleVi: "Các học giả sẽ xem xét kỹ lưỡng bản thảo mới được phát hiện trước khi đưa ra kết luận.",
    synonyms: ["examine", "inspect", "analyze", "audit"]
  },
  bolster: {
    word: "bolster",
    partOfSpeech: "verb",
    partOfSpeechVi: "động từ",
    phonetic: "/ˈboʊl.stər/",
    definitionEn: "To support, strengthen, or reinforce something, such as an argument or morale.",
    definitionVi: "Củng cố, tăng cường, bồi đắp và gia tăng sức mạnh cho một luận điểm hay tinh thần.",
    contextMeaningEn: "Tested in questions regarding evidence that reinforces an author's thesis.",
    contextMeaningVi: "Kiểm tra trong các câu hỏi về bằng chứng củng cố luận điểm chính của tác giả.",
    exampleEn: "The economist presented statistical tables to bolster her central thesis.",
    exampleVi: "Nhà kinh tế học đã trình bày các bảng thống kê để củng cố luận điểm trung tâm của mình.",
    synonyms: ["strengthen", "reinforce", "boost", "fortify"]
  },
  disdain: {
    word: "disdain",
    partOfSpeech: "noun / verb",
    partOfSpeechVi: "danh từ / động từ",
    phonetic: "/dɪsˈdeɪn/",
    definitionEn: "The feeling that someone or something is unworthy of consideration or respect; contempt.",
    definitionVi: "Sự khinh bỉ, coi thường, không tôn trọng hoặc coi ai/cái gì không đáng để tâm.",
    contextMeaningEn: "Often tests an author's critical tone toward outdated traditions or flawed policies.",
    contextMeaningVi: "Thường kiểm tra giọng điệu phê phán của tác giả đối với các truyền thống lỗi thời hoặc chính sách sai lầm.",
    exampleEn: "The critic expressed disdain for the derivative nature of the new film.",
    exampleVi: "Nhà phê bình bày tỏ sự khinh miệt đối với tính chất sao chép thiếu sáng tạo của bộ phim mới.",
    synonyms: ["contempt", "scorn", "derision", "disrespect"]
  },
  anomalous: {
    word: "anomalous",
    partOfSpeech: "adjective",
    partOfSpeechVi: "tính từ",
    phonetic: "/əˈnɑː.mə.ləs/",
    definitionEn: "Deviating from what is standard, normal, or expected; abnormal or irregular.",
    definitionVi: "Bất thường, dị thường, khác biệt so với tiêu chuẩn hoặc quy luật thông thường.",
    contextMeaningEn: "Appears in science passages describing unexpected data points or mutations.",
    contextMeaningVi: "Xuất hiện trong các bài đọc khoa học mô tả các điểm dữ liệu bất ngờ hoặc đột biến khác thường.",
    exampleEn: "The researchers re-ran the simulation to account for the anomalous temperature readings.",
    exampleVi: "Các nhà nghiên cứu đã chạy lại mô phỏng để tính đến các chỉ số nhiệt độ bất thường.",
    synonyms: ["abnormal", "irregular", "atypical", "aberrant"]
  }
};

// Safe JSON cleaning utility (removes markdown backticks and wraps safely)
export function extractAndParseJSON(rawText: string): any {
  if (!rawText || !rawText.trim()) return {};
  
  let cleaned = rawText.trim();
  // Remove markdown code fences ```json ... ``` or ``` ... ```
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  }

  // Find first { and last }
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    // If invalid JSON, attempt basic cleanup of trailing commas
    try {
      const relaxed = cleaned.replace(/,\s*([}\]])/g, "$1");
      return JSON.parse(relaxed);
    } catch {
      return {};
    }
  }
}

// Multi-provider translation service to guarantee Vietnamese translation is always obtained
export async function translateToVietnamese(text: string): Promise<string> {
  if (!text || text.trim().length === 0) return "";
  const trimmed = text.trim();

  // Provider 1: Gemini API translation if available
  const gemini = getGemini();
  if (gemini) {
    try {
      const gRes = await gemini.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Translate the following English dictionary definition or context sentence accurately into Vietnamese. Return ONLY the Vietnamese translation without quotation marks or explanations:\n\n${trimmed}`,
        config: {
          temperature: 0.1,
          maxOutputTokens: 250,
        }
      });
      const t = gRes.text?.trim().replace(/^["']|["']$/g, '');
      if (t && t.length > 0) {
        return t;
      }
    } catch {
      // Continue to next provider
    }
  }

  // Provider 2: Google Translate GTX endpoint
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(trimmed)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(2500) });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const translated = data[0].map((item: any) => item[0]).filter(Boolean).join("");
        if (translated && translated.trim().length > 0) {
          return translated.trim();
        }
      }
    }
  } catch {
    // Continue to next provider
  }

  // Provider 3: MyMemory Translation API
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(trimmed)}&langpair=en|vi`;
    const res = await fetch(url, { signal: AbortSignal.timeout(2500) });
    if (res.ok) {
      const data = await res.json();
      const match = data?.responseData?.translatedText;
      if (match && typeof match === "string" && match.trim().length > 0 && !match.toLowerCase().includes("mymemory")) {
        return match.trim();
      }
    }
  } catch {
    // Continue to next provider
  }

  return "";
}

// Generate high-grade bilingual entry via Gemini when available
export async function generateGeminiBilingualEntry(word: string, contextSentence?: string): Promise<BilingualWordEntry | null> {
  const gemini = getGemini();
  if (!gemini) return null;

  try {
    const prompt = `You are a professional SAT English-Vietnamese lexicographer.
Provide a high-quality, strictly bilingual dictionary entry for the English word "${word}".
${contextSentence ? `The word appears in this passage context: "${contextSentence}"` : ""}

Requirements:
1. "definitionEn": Clear, academic English definition of the word.
2. "definitionVi": Natural, precise Vietnamese translation of the definition (e.g. for "A person who is popular, especially at a school" -> "Người nổi tiếng, được ưa chuộng, đặc biệt ở trường học").
3. "contextMeaningEn": If context was provided, format as: In this passage: "${contextSentence || ''}" (or omit if no context).
4. "contextMeaningVi": If context was provided, format as: Trong đoạn trích: "<Vietnamese translation of that sentence>".
5. "exampleEn": A realistic academic example sentence in English using the word.
6. "exampleVi": Vietnamese translation of the example sentence.
7. "synonyms": Array of 3 to 6 genuine English synonyms (English words ONLY, never Vietnamese).
8. "partOfSpeech": English part of speech (noun, verb, adjective, adverb).
9. "partOfSpeechVi": Vietnamese part of speech (danh từ, động từ, tính từ, trạng từ).
10. "phonetic": IPA pronunciation (e.g. /ˈpɑːpjələr/).

Return ONLY valid JSON:
{
  "word": "${word}",
  "partOfSpeech": "...",
  "partOfSpeechVi": "...",
  "phonetic": "/.../",
  "definitionEn": "...",
  "definitionVi": "...",
  "contextMeaningEn": "...",
  "contextMeaningVi": "...",
  "exampleEn": "...",
  "exampleVi": "...",
  "synonyms": ["...", "..."]
}`;

    const res = await gemini.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.1,
      }
    });

    const text = res.text;
    if (text) {
      const parsed = extractAndParseJSON(text);
      if (parsed && (parsed.definitionEn || parsed.definitionVi)) {
        return {
          word: parsed.word || word,
          partOfSpeech: parsed.partOfSpeech || "vocabulary",
          partOfSpeechVi: parsed.partOfSpeechVi || "từ vựng",
          phonetic: parsed.phonetic || `/${word.toLowerCase()}/`,
          definitionEn: parsed.definitionEn || `Definition for "${word}".`,
          definitionVi: parsed.definitionVi || `Định nghĩa cho từ "${word}".`,
          contextMeaningEn: parsed.contextMeaningEn || (contextSentence ? `In this passage: "${contextSentence}"` : undefined),
          contextMeaningVi: parsed.contextMeaningVi || undefined,
          exampleEn: parsed.exampleEn || undefined,
          exampleVi: parsed.exampleVi || undefined,
          synonyms: Array.isArray(parsed.synonyms) ? parsed.synonyms.filter((s: any) => typeof s === 'string' && /^[a-zA-Z\s\-']+$/.test(s)) : []
        };
      }
    }
  } catch (err) {
    console.warn("Gemini dictionary lookup error, proceeding with API pipeline:", err);
  }
  return null;
}

// English to Vietnamese Part of Speech Dictionary
const POS_TRANSLATIONS: Record<string, string> = {
  noun: "danh từ",
  verb: "động từ",
  adjective: "tính từ",
  adverb: "trạng từ / phó từ",
  preposition: "giới từ",
  conjunction: "liên từ",
  pronoun: "đại từ",
  interjection: "thán từ",
  idiom: "thành ngữ",
  phrase: "cụm từ",
};

export function translatePartOfSpeech(pos?: string): string {
  if (!pos) return "từ vựng";
  const lower = pos.toLowerCase();
  for (const [key, val] of Object.entries(POS_TRANSLATIONS)) {
    if (lower.includes(key)) return val;
  }
  return pos;
}

// Banned generic placeholder words that are NOT real synonyms
const BANNED_GENERIC_SYNONYMS = new Set([
  "term", "vocabulary", "concept", "expression", "word", "academic term", "item", "phrase"
]);

// Helper to fetch REAL, authentic English synonyms specifically for the word being checked
export async function fetchRealEnglishSynonyms(word: string): Promise<string[]> {
  const clean = word.toLowerCase().trim();
  if (!clean || clean.length < 2) return [];

  // Check curated vocabulary
  if (COMMON_SAT_BILINGUAL_VOCAB[clean]?.synonyms?.length) {
    return COMMON_SAT_BILINGUAL_VOCAB[clean].synonyms;
  }

  const collected = new Set<string>();

  // 1. Query Datamuse rel_syn (Direct relational synonyms)
  try {
    const res = await fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(clean)}&max=8`, {
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        for (const item of data) {
          const w = typeof item?.word === "string" ? item.word.toLowerCase().trim() : "";
          if (w && w !== clean && /^[a-zA-Z\s\-']+$/.test(w) && !BANNED_GENERIC_SYNONYMS.has(w)) {
            collected.add(w);
          }
        }
      }
    }
  } catch (err) {
    // continue
  }

  // 2. Query Datamuse ml (Means-like / semantic synonyms) if we need more
  if (collected.size < 3) {
    try {
      const res = await fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(clean)}&max=8`, {
        signal: AbortSignal.timeout(3000)
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          for (const item of data) {
            const w = typeof item?.word === "string" ? item.word.toLowerCase().trim() : "";
            if (w && w !== clean && /^[a-zA-Z\s\-']+$/.test(w) && !BANNED_GENERIC_SYNONYMS.has(w)) {
              collected.add(w);
            }
          }
        }
      }
    } catch (err) {
      // continue
    }
  }

  // 3. Query dictionaryapi.dev for synonyms
  if (collected.size < 3) {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`, {
        signal: AbortSignal.timeout(3000)
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          for (const entry of data) {
            for (const meaning of entry?.meanings || []) {
              for (const syn of meaning?.synonyms || []) {
                const w = typeof syn === "string" ? syn.toLowerCase().trim() : "";
                if (w && w !== clean && /^[a-zA-Z\s\-']+$/.test(w) && !BANNED_GENERIC_SYNONYMS.has(w)) {
                  collected.add(w);
                }
              }
              for (const def of meaning?.definitions || []) {
                for (const syn of def?.synonyms || []) {
                  const w = typeof syn === "string" ? syn.toLowerCase().trim() : "";
                  if (w && w !== clean && /^[a-zA-Z\s\-']+$/.test(w) && !BANNED_GENERIC_SYNONYMS.has(w)) {
                    collected.add(w);
                  }
                }
              }
            }
          }
        }
      }
    } catch (err) {
      // ignore
    }
  }

  return Array.from(collected).slice(0, 5);
}

/**
 * Accurately extracts the complete sentence or focused clause containing the target word from full passage/context text.
 * Prevents awkward half-text cutoffs and ensures the word being checked is always present in the context.
 */
export function extractTargetContextSentence(fullText?: string, targetWord?: string): string {
  if (!fullText || typeof fullText !== "string" || !targetWord || typeof targetWord !== "string") {
    return "";
  }

  // 1. Strip HTML tags, decode common entities, and normalize whitespace
  let cleanText = fullText
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanText) return "";

  const cleanWord = targetWord.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
  if (!cleanWord || cleanWord.length < 2) return "";

  // 2. Find word location using regex with word boundary, falling back to substring
  const escapedWord = cleanWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let wordRegex = new RegExp(`\\b${escapedWord}\\b`, "i");
  let match = cleanText.match(wordRegex);

  // If exact boundary not found, try root match or substring
  if (!match) {
    wordRegex = new RegExp(`${escapedWord}`, "i");
    match = cleanText.match(wordRegex);
  }

  if (!match || match.index === undefined) {
    return "";
  }

  const wordIndex = match.index;
  const matchLen = match[0].length;

  // 3. Find natural sentence boundaries around the matched word
  // Search backward for sentence start: punctuation (. ? !) followed by space, or start of string
  const beforeText = cleanText.substring(0, wordIndex);
  let sentenceStart = 0;
  
  const startPunctMatches = [...beforeText.matchAll(/(?:[.!?]["'»]?\s+|\n+)/g)];
  if (startPunctMatches.length > 0) {
    const lastPunct = startPunctMatches[startPunctMatches.length - 1];
    if (lastPunct.index !== undefined) {
      sentenceStart = lastPunct.index + lastPunct[0].length;
    }
  }

  // Search forward for sentence end: punctuation (. ? !) or end of string
  const afterText = cleanText.substring(wordIndex + matchLen);
  let sentenceEnd = cleanText.length;
  const endPunctMatch = afterText.match(/[.!?](?:["'»]?\s+|\s*$)/);
  if (endPunctMatch && endPunctMatch.index !== undefined) {
    sentenceEnd = wordIndex + matchLen + endPunctMatch.index + (endPunctMatch[0].trim().length || 1);
  }

  let sentence = cleanText.substring(sentenceStart, sentenceEnd).trim();

  // Clean leading/trailing punctuation if not part of a sentence
  sentence = sentence.replace(/^[-,:;\s]+/, "").replace(/[-,:;\s]+$/, "");

  // If the extracted sentence is within 220 characters and contains the word, return it
  if (sentence.length > 0 && sentence.length <= 220 && sentence.toLowerCase().includes(cleanWord.toLowerCase())) {
    return sentence;
  }

  // If the sentence is very long (> 220 chars), extract a clean phrase/window around the word bounded by words
  const words = cleanText.split(/\s+/);
  let targetWordIdx = -1;
  for (let i = 0; i < words.length; i++) {
    const w = words[i].replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "").toLowerCase();
    if (w === cleanWord.toLowerCase() || w.includes(cleanWord.toLowerCase()) || cleanWord.toLowerCase().includes(w)) {
      targetWordIdx = i;
      break;
    }
  }

  if (targetWordIdx !== -1) {
    const startIdx = Math.max(0, targetWordIdx - 10);
    const endIdx = Math.min(words.length, targetWordIdx + 11);
    const sliceWords = words.slice(startIdx, endIdx);
    let phrase = sliceWords.join(" ");
    if (startIdx > 0 && !phrase.startsWith("...")) {
      phrase = "..." + phrase;
    }
    if (endIdx < words.length && !phrase.endsWith("...")) {
      phrase = phrase + "...";
    }
    return phrase;
  }

  return sentence;
}

// Primary Bilingual Word Lookup using Free Dictionary API + Free Translation + Datamuse Synonyms
// Strictly uses the authentic definition from the Free Dictionary API
export async function generateBilingualDefinition(word: string, context?: string): Promise<BilingualWordEntry> {
  const clean = word.toLowerCase().trim();
  const targetSentence = extractTargetContextSentence(context, word);

  // Check curated vocabulary first for instant 0ms response
  if (COMMON_SAT_BILINGUAL_VOCAB[clean]) {
    const entry = { ...COMMON_SAT_BILINGUAL_VOCAB[clean] };
    if (targetSentence) {
      entry.contextMeaningEn = `In this passage: "${targetSentence}"`;
      try {
        const ctxVi = await translateToVietnamese(targetSentence);
        if (ctxVi) {
          entry.contextMeaningVi = `Trong đoạn trích: "${ctxVi}"`;
        }
      } catch {
        // ignore
      }
    }
    return entry;
  }

  // Attempt high quality Gemini AI bilingual dictionary entry if available
  const geminiEntry = await generateGeminiBilingualEntry(word, targetSentence);
  if (geminiEntry && (geminiEntry.definitionEn || geminiEntry.definitionVi)) {
    return geminiEntry;
  }

  // Fetch real, genuine synonyms for the word in parallel
  const realSynonymsPromise = fetchRealEnglishSynonyms(clean);

  // 1. Fetch directly from Free Dictionary API (api.dictionaryapi.dev)
  let entryData: any = null;
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`, {
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        entryData = data[0];
      }
    }
  } catch (err) {
    // Continue to variations
  }

  // If initial query didn't match (e.g. inflected forms ending in -s, -ed, -ing, -ly), try root forms
  if (!entryData) {
    const variations = [
      clean.replace(/s$/, ""),
      clean.replace(/es$/, ""),
      clean.replace(/ed$/, ""),
      clean.replace(/ing$/, ""),
      clean.replace(/ly$/, "")
    ].filter(v => v && v.length >= 3 && v !== clean);

    for (const v of variations) {
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(v)}`, {
          signal: AbortSignal.timeout(3000)
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            entryData = data[0];
            break;
          }
        }
      } catch (err) {
        // try next
      }
    }
  }

  if (entryData) {
    // Find best definition, example, and part of speech from the Free Dictionary API
    let bestDef = "";
    let bestPos = "vocabulary";
    let bestEx = "";
    const phonetic = entryData.phonetic || entryData.phonetics?.find((p: any) => p.text)?.text || "";

    for (const m of entryData.meanings || []) {
      for (const d of m.definitions || []) {
        if (d.definition) {
          if (!bestDef) {
            bestDef = d.definition;
            bestPos = m.partOfSpeech || bestPos;
          }
          if (d.example && !bestEx) {
            bestEx = d.example;
            bestDef = d.definition;
            bestPos = m.partOfSpeech || bestPos;
            break;
          }
        }
      }
    }

    if (bestDef) {
      const posVi = translatePartOfSpeech(bestPos);

      // Translate definition, example, and contextual sentence to Vietnamese
      const [defVi, exVi, ctxVi, realSynonyms] = await Promise.all([
        translateToVietnamese(bestDef),
        bestEx ? translateToVietnamese(bestEx) : Promise.resolve(""),
        targetSentence ? translateToVietnamese(targetSentence) : Promise.resolve(""),
        realSynonymsPromise
      ]);

      return {
        word: word,
        partOfSpeech: bestPos,
        partOfSpeechVi: posVi,
        phonetic: phonetic,
        definitionEn: bestDef,
        definitionVi: defVi || "",
        contextMeaningEn: targetSentence ? `In this passage: "${targetSentence}"` : undefined,
        contextMeaningVi: targetSentence ? (ctxVi ? `Trong đoạn trích: "${ctxVi}"` : undefined) : undefined,
        exampleEn: bestEx || undefined as any,
        exampleVi: exVi || undefined as any,
        synonyms: realSynonyms
      };
    }
  }

  // 2. Datamuse Dictionary Definition Fallback if Free Dictionary API lacked the word
  let datamuseDef = "";
  let datamusePos = "vocabulary";
  try {
    const dmRes = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(clean)}&md=d&max=1`, {
      signal: AbortSignal.timeout(3000)
    });
    if (dmRes.ok) {
      const dmData = await dmRes.json();
      if (Array.isArray(dmData) && dmData[0]?.defs?.length > 0) {
        const rawDef = dmData[0].defs[0];
        const parts = rawDef.split("\t");
        if (parts.length >= 2) {
          datamusePos = parts[0] === "n" ? "noun" : parts[0] === "v" ? "verb" : parts[0] === "adj" ? "adjective" : parts[0] === "adv" ? "adverb" : "vocabulary";
          datamuseDef = parts[1].trim();
        } else {
          datamuseDef = rawDef.trim();
        }
      }
    }
  } catch (err) {
    // ignore
  }

  const finalDefEn = datamuseDef || `Definition for "${word}".`;
  const [defVi, ctxVi, realSynonyms] = await Promise.all([
    translateToVietnamese(finalDefEn),
    targetSentence ? translateToVietnamese(targetSentence) : Promise.resolve(""),
    realSynonymsPromise
  ]);

  return {
    word: word,
    partOfSpeech: datamusePos,
    partOfSpeechVi: translatePartOfSpeech(datamusePos),
    phonetic: `/${clean}/`,
    definitionEn: finalDefEn,
    definitionVi: defVi || "",
    contextMeaningEn: targetSentence ? `In this passage: "${targetSentence}"` : undefined,
    contextMeaningVi: targetSentence ? (ctxVi ? `Trong đoạn trích: "${ctxVi}"` : undefined) : undefined,
    exampleEn: undefined as any,
    exampleVi: undefined as any,
    synonyms: realSynonyms
  };
}

// Alias for backward compatibility if imported elsewhere
export const generateFallbackDefinition = generateBilingualDefinition;
