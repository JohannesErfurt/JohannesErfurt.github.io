from __future__ import annotations

import json
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "assets" / "Dr_Johannes_Erfurt_CV.pdf"
FONT_DIR = Path(r"C:\Windows\Fonts")

NAVY = colors.HexColor("#0F172A")
INDIGO = colors.HexColor("#4338CA")
SLATE = colors.HexColor("#475569")
LIGHT = colors.HexColor("#E2E8F0")


def load_json(name: str):
    return json.loads((ROOT / "src" / "data" / f"{name}.json").read_text(encoding="utf-8"))


def register_fonts() -> tuple[str, str]:
    regular = FONT_DIR / "arial.ttf"
    bold = FONT_DIR / "arialbd.ttf"
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("CVSans", regular))
        pdfmetrics.registerFont(TTFont("CVSans-Bold", bold))
        return "CVSans", "CVSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()
BASE = getSampleStyleSheet()

STYLES = {
    "name": ParagraphStyle(
        "Name",
        parent=BASE["Title"],
        fontName=FONT_BOLD,
        fontSize=23,
        leading=27,
        textColor=NAVY,
        alignment=TA_CENTER,
        spaceAfter=2 * mm,
    ),
    "tagline": ParagraphStyle(
        "Tagline",
        parent=BASE["Normal"],
        fontName=FONT_BOLD,
        fontSize=10.5,
        leading=14,
        textColor=INDIGO,
        alignment=TA_CENTER,
        spaceAfter=1.5 * mm,
    ),
    "contact": ParagraphStyle(
        "Contact",
        parent=BASE["Normal"],
        fontName=FONT,
        fontSize=8.5,
        leading=11,
        textColor=SLATE,
        alignment=TA_CENTER,
        spaceAfter=1 * mm,
    ),
    "language_line": ParagraphStyle(
        "LanguageLine",
        parent=BASE["Normal"],
        fontName=FONT,
        fontSize=8,
        leading=10,
        textColor=SLATE,
        alignment=TA_CENTER,
        spaceAfter=4 * mm,
    ),
    "section": ParagraphStyle(
        "Section",
        parent=BASE["Heading2"],
        fontName=FONT_BOLD,
        fontSize=12,
        leading=15,
        textColor=INDIGO,
        borderColor=LIGHT,
        borderWidth=0,
        borderPadding=(0, 0, 1.5 * mm, 0),
        spaceBefore=4 * mm,
        spaceAfter=2 * mm,
    ),
    "entry": ParagraphStyle(
        "Entry",
        parent=BASE["Normal"],
        fontName=FONT_BOLD,
        fontSize=9.5,
        leading=12,
        textColor=NAVY,
        spaceAfter=1 * mm,
    ),
    "body": ParagraphStyle(
        "Body",
        parent=BASE["Normal"],
        fontName=FONT,
        fontSize=8.8,
        leading=12,
        textColor=NAVY,
        spaceAfter=1.5 * mm,
    ),
    "bullet": ParagraphStyle(
        "Bullet",
        parent=BASE["Normal"],
        fontName=FONT,
        fontSize=8.5,
        leading=11.5,
        leftIndent=4 * mm,
        firstLineIndent=-2.5 * mm,
        bulletIndent=0,
        textColor=NAVY,
        spaceAfter=0.7 * mm,
    ),
    "small": ParagraphStyle(
        "Small",
        parent=BASE["Normal"],
        fontName=FONT,
        fontSize=8.2,
        leading=11,
        textColor=NAVY,
        spaceAfter=1.2 * mm,
    ),
}


def paragraph(text: str, style: str = "body") -> Paragraph:
    return Paragraph(escape(text), STYLES[style])


def section(title: str) -> list:
    return [Paragraph(escape(title.upper()), STYLES["section"])]


def bullet(text: str) -> Paragraph:
    return Paragraph(f"- {escape(text)}", STYLES["bullet"])


def page_footer(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(LIGHT)
    canvas.line(18 * mm, 12 * mm, A4[0] - 18 * mm, 12 * mm)
    canvas.setFont(FONT, 7.5)
    canvas.setFillColor(SLATE)
    canvas.drawString(18 * mm, 8 * mm, "Johannes Erfurt - Public ATS CV")
    canvas.drawRightString(A4[0] - 18 * mm, 8 * mm, f"Page {document.page}")
    canvas.restoreState()


def build_cv() -> None:
    languages = load_json("languages")
    experience = load_json("experience")
    projects = load_json("projects")
    publications = load_json("publications")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=15 * mm,
        bottomMargin=17 * mm,
        title="Dr.-Ing. Johannes Erfurt - ATS CV",
        author="Johannes Erfurt",
        subject="Public professional curriculum vitae",
        creator="Johannes Erfurt portfolio CV generator",
    )

    story = [
        Paragraph("Dr.-Ing. Johannes Erfurt", STYLES["name"]),
        Paragraph("AI Systems Engineer | Computer Vision Expert", STYLES["tagline"]),
        Paragraph(
            '<link href="https://github.com/JohannesErfurt">github.com/JohannesErfurt</link>'
            ' | <link href="https://www.linkedin.com/in/johanneserfurt">linkedin.com/in/johanneserfurt</link>',
            STYLES["contact"],
        ),
        Paragraph(
            escape(" | ".join(f'{item["language"]}: {item["level"]}' for item in languages)),
            STYLES["language_line"],
        ),
    ]

    story += section("Professional Summary")
    story.append(
        paragraph(
            "AI systems engineer and computer vision specialist with a doctorate in video coding. "
            "Experience spans industrial deep-learning systems, MLOps, multi-agent applications, "
            "image and video processing, signal filtering, and international standardization."
        )
    )

    story += section("Core Competencies")
    story.append(
        paragraph(
            "Generative AI and multi-agent systems: LangGraph, LangChain, prompt engineering | "
            "Computer vision and machine learning: CNNs, vision transformers, fine-tuning | "
            "Software and MLOps: Python, C++, Docker, CI/CD | "
            "Image and video coding: HEVC, VVC, Wiener and learned filters"
        )
    )

    story += section("Professional Experience")
    for entry in experience:
        if entry["type"] not in {"employment", "upskilling", "sabbatical"}:
            continue
        heading = f'{entry["role"]} | {entry["organization"]} | {entry["period"]}'
        block = [paragraph(heading, "entry"), paragraph(entry["summary"])]
        block.extend(bullet(item) for item in entry["keyHighlights"])
        if entry.get("techStack"):
            block.append(paragraph("Technologies: " + ", ".join(entry["techStack"]), "small"))
        block.append(Spacer(1, 1.5 * mm))
        story.append(KeepTogether(block))

    education_blocks = []
    for entry in experience:
        if entry["type"] != "education":
            continue
        heading = f'{entry["role"]} | {entry["organization"]} | {entry["period"]}'
        block = [paragraph(heading, "entry"), paragraph(entry["summary"])]
        block.extend(bullet(item) for item in entry["keyHighlights"])
        block.append(Spacer(1, 1 * mm))
        education_blocks.append(block)

    if education_blocks:
        story.append(KeepTogether(section("Education") + education_blocks[0]))
        story.extend(KeepTogether(block) for block in education_blocks[1:])

    story += section("Selected Projects")
    for project in projects:
        block = [
            paragraph(f'{project["title"]} | {project["subtitle"]}', "entry"),
            paragraph(project["description"]),
            paragraph("Technical impact: " + project["impact"]),
            paragraph("Technologies: " + ", ".join(project["techStack"]), "small"),
        ]
        if project.get("githubUrl"):
            url = escape(project["githubUrl"])
            block.append(Paragraph(f'<link href="{url}">{url}</link>', STYLES["small"]))
        block.append(Spacer(1, 2 * mm))
        story.append(KeepTogether(block))

    story += section("Selected Publications")
    for publication in publications:
        citation = (
            f'{publication["authors"]}. "{publication["title"]}." '
            f'{publication["venue"]}, {publication["year"]}.'
        )
        doi = escape(publication["doi"])
        block = [
            Paragraph(
                f'{escape(citation)} DOI: <link href="{doi}">{doi}</link>',
                STYLES["small"],
            ),
            Spacer(1, 0.6 * mm),
        ]
        story.append(KeepTogether(block))

    document.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
    print(OUTPUT)


if __name__ == "__main__":
    build_cv()
