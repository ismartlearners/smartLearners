# Guidelines for SAT Applet Development

## Reading & Writing Hints Rule:
- **Highlighting Color Code Rule**:
  - **GREEN**: ONLY clues and clue indicators (e.g. contrast words like `While`, `but`, punctuation clues like `:`, `,`, and any key words that directly function as the clue itself).
  - **YELLOW**: General key words / supporting context words in the passage.
  - **Key words that are also clues**: MUST be highlighted in **GREEN**.
- **NEVER use the exact word as in the answer choices** inside the hints (especially the target meaning in `- has to mean:`).
- **ALWAYS use synonyms / paraphrasing / conceptual equivalents** instead of giving away the exact answer choice word in the hint note.
- **Use "Clue AFTER" / "Clue in" / "Clue BEFORE" rather than "read AFTER" / "read BEFORE"**: Users need to read the whole text, but should pay special attention to the phrase or sentence where the clue and supporting details are located (e.g. "Clue in the NEXT sentence", "Clue AFTER :", "Clue BEFORE 'this ________'").
- **Use "Clue:" instead of "Cause:"** for clue indicators (e.g., "Clue : Because", "Clue : as").
- **Demonstrative Pronoun Rule**: When seeing `This/That/These/Those`, annotate with `"seeing This/That/These/Those, find clues in previous clause/sentence."`
- **Text Wrapping in Hints**: Always ensure hint text boxes wrap gracefully (`whitespace-normal break-words`) if the container or text box width is too narrow for all wordings.
- **Contrast Rule**: When developing hints, pay close attention to contrast (e.g., `"Contrast: But... a cleaner process..."`, `"Contrast: However..."`, `"Contrast: ...rather..."`) because contrasting context helps users identify the antonym/counterpart vocab easily.

## Bilingual Dictionary Format Rule (PERMANENT & UNCHANGEABLE):
- **Bilingual Structure (EN → VI)**:
  - **Definition**: English definition first, followed immediately below by the Vietnamese translation starting with `"Vietnamese: <Dịch tiếng Việt>"`.
  - **In Context**: English passage/sentence context first, followed immediately below by the Vietnamese translation starting with `"Vietnamese: <Dịch tiếng Việt>"`.
  - **Example Sentence**: English example sentence first, followed immediately below by the Vietnamese translation starting with `"Vietnamese: <Dịch tiếng Việt>"`.
- **Synonyms**:
  - Section header MUST be strictly `"English Synonyms"`.
  - Synonyms MUST remain purely in English (clickable English words only, never translated into Vietnamese).
- **DO NOT CHANGE THIS FORMAT UNDER ANY CIRCUMSTANCES**.
