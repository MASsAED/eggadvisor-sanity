// sanity/schemas/homePage.ts
import {defineType, defineField} from "sanity";
import {HomeIcon} from "@sanity/icons";

export default defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,

  fields: [
    // ---------------------------
    // HERO
    // ---------------------------
    defineField({
      name: "heroTitlePrefix",
      title: "Hero title – first part",
      type: "string",
      description: `Example: "Independent insights for"`,
    }),
    defineField({
      name: "heroTitleHighlight",
      title: "Hero title – highlighted word",
      type: "string",
      description: `Example: "egg freezing" (will be in primary colour)`,
    }),
    defineField({
      name: "heroTitleSuffix",
      title: "Hero title – last part",
      type: "string",
      description: `Example: "decisions" (comes after the highlight)`,
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle (paragraph under heading)",
      type: "text",
      rows: 3,
      description:
        "Short explanation under the main heading. A couple of sentences max.",
    }),

    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA – button text",
      type: "string",
      description: `Example: "Try report preview"`,
    }),
    defineField({
      name: "primaryCtaUrl",
      title: "Primary CTA – link URL",
      type: "string",
      description: `Example: "/report/preview"`,
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA – button text",
      type: "string",
      description: `Example: "Browse directory"`,
    }),
    defineField({
      name: "secondaryCtaUrl",
      title: "Secondary CTA – link URL",
      type: "string",
      description: `Example: "/directory"`,
    }),

    defineField({
      name: "heroBadges",
      title: "Hero feature badges (4 items)",
      type: "array",
      description:
        "Short bullet points inside the white hero card. Keep them very short (e.g. “UK/UAE specific guidance”).",
      of: [{type: "string"}],
      validation: (Rule) => Rule.max(4),
    }),

    defineField({
      name: "heroDisclaimer",
      title: "Hero disclaimer text",
      type: "string",
      description: `Example: "Demo only — not medical advice."`,
    }),

    // ---------------------------
    // HOME FEATURES SECTION
    // ---------------------------
    defineField({
      name: "introLabel",
      title: "Intro – pill label (small tag)",
      type: "string",
      description: `Small chip above heading. Example: "How Egg Advisor helps"`,
    }),
    defineField({
      name: "introTitle",
      title: "Intro – section title",
      type: "string",
      description: `Main heading, e.g. "Less Googling, more clarity".`,
    }),
    defineField({
      name: "introText",
      title: "Intro – section paragraph",
      type: "text",
      rows: 3,
      description: `Short paragraph under the intro heading.`,
    }),
    defineField({
      name: "features",
      title: "Intro feature cards (3 items)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card title",
              type: "string",
              description: `Example: "Independent insights"`,
            }),
            defineField({
              name: "description",
              title: "Card description",
              type: "text",
              rows: 4,
              description: "Short description for this card.",
            }),
          ],
        },
      ],
      description: "Three cards in the intro section. Order = 01, 02, 03.",
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "feature3CtaLabel",
      title: "Feature card 3 – link label",
      type: "string",
      description: `Example: "Book a 15-min consult →"`,
    }),
    defineField({
      name: "feature3CtaHref",
      title: "Feature card 3 – link URL",
      type: "string",
      description: `Example: "/book"`,
    }),

    // ---------------------------
    // ASK DOCTOR SECTION
    // ---------------------------
    defineField({
      name: "askDoctorLabel",
      title: "Ask doctor – pill label",
      type: "string",
      description: `Small tag above heading. Example: "Ask a doctor"`,
    }),
    defineField({
      name: "askDoctorTitle",
      title: "Ask doctor – section title",
      type: "string",
      description: `Example: "Real questions women ask about egg freezing"`,
    }),
    defineField({
      name: "askDoctorSubtitle",
      title: "Ask doctor – section description",
      type: "text",
      rows: 3,
      description:
        "Short paragraph explaining this section (shown under the heading).",
    }),
    defineField({
      name: "askDoctorCtaLabel",
      title: "Ask doctor – link label",
      type: "string",
      description: `Example: "Read more answers →"`,
    }),
    defineField({
      name: "askDoctorCtaHref",
      title: "Ask doctor – link URL",
      type: "string",
      description: `Example: "/answers"`,
    }),
    defineField({
      name: "askDoctorItems",
      title: "Ask a doctor – cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              description: "The question shown as the card title.",
            }),
            defineField({
              name: "summary",
              title: "Answer summary",
              type: "text",
              rows: 4,
              description: "Short, plain-language explanation.",
            }),
            defineField({
              name: "doctor",
              title: "Doctor / expert line",
              type: "string",
              description: `Example: "Answered by a fertility doctor"`,
            }),
            defineField({
              name: "image",
              title: "Image path or URL",
              type: "string",
              description: `Example: "/ask-doctor/pcos.jpg"`,
            }),
          ],
        },
      ],
      description:
        "These cards power both the mobile card and the desktop scrolling row. Aim for 4–6 items.",
    }),

    // ---------------------------
    // CLINIC SPOTLIGHT SECTION
    // ---------------------------
    defineField({
      name: "clinicLabel",
      title: "Clinic spotlight – pill label",
      type: "string",
      description: `Small tag above heading. Example: "Clinic spotlight"`,
    }),
    defineField({
      name: "clinicTitle",
      title: "Clinic spotlight – section title",
      type: "string",
      description: `Example: "Clinics women trust in the UK & UAE"`,
    }),
    defineField({
      name: "clinicCtaLabel",
      title: "Clinic spotlight – link label",
      type: "string",
      description: `Example: "Browse directory →"`,
    }),
    defineField({
      name: "clinicCtaHref",
      title: "Clinic spotlight – link URL",
      type: "string",
      description: `Example: "/directory"`,
    }),
    defineField({
      name: "clinicSpotlightClinics",
      title: "Clinic spotlight – clinics list",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Clinic name",
              type: "string",
            }),
            defineField({
              name: "country",
              title: "Country label",
              type: "string",
              description: `Exactly "UK" or "UAE" to match the pill colours.`,
            }),
            defineField({
              name: "rating",
              title: "Rating (0–5)",
              type: "number",
              description: "Decimal allowed, e.g. 4.8",
            }),
            defineField({
              name: "image",
              title: "Image path or URL",
              type: "string",
              description: `Example: "/clinics/lister.jpg"`,
            }),
          ],
        },
      ],
      description:
        "Cards in the clinics scroller. These are duplicated to create an infinite scroll.",
    }),

    // ---------------------------
    // TEAM SECTION
    // ---------------------------
    defineField({
      name: "teamLabel",
      title: "Team – pill label",
      type: "string",
      description: `Example: "Our team"`,
    }),
    defineField({
      name: "teamTitle",
      title: "Team – section title",
      type: "string",
      description: `Main heading above the team cards.`,
    }),
    defineField({
      name: "teamSubtitle",
      title: "Team – section description",
      type: "text",
      rows: 3,
      description:
        "Paragraph explaining the mix of lived experience, clinical science etc.",
    }),
    defineField({
      name: "teamHelperText",
      title: "Team – helper text (small right-hand copy)",
      type: "text",
      rows: 3,
      description: `Tiny grey text on the right, e.g. "Click 'Read story' to see a short profile..."`,
    }),
    defineField({
      name: "teamMembers",
      title: "Homepage team members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "role",
              title: "Role / title",
              type: "string",
            }),
            defineField({
              name: "focus",
              title: "Focus chip text",
              type: "string",
              description: `Short line for the pill, e.g. "Strategy · Lived experience".`,
            }),
            defineField({
              name: "image",
              title: "Headshot image path or URL",
              type: "string",
              description: `Example: "/team/ruth.webp"`,
            }),
            defineField({
              name: "summary",
              title: "Short bio / summary",
              type: "text",
              rows: 6,
              description:
                "A few sentences about this person. This is the main body text.",
            }),
            defineField({
              name: "primaryCtaLabel",
              title: "Primary button label",
              type: "string",
              description: `Example: "Read Ruth’s bio"`,
            }),
            defineField({
              name: "primaryCtaHref",
              title: "Primary button URL",
              type: "string",
              description: `Example: "/team/ruth-odwyer"`,
            }),
            defineField({
              name: "secondaryCtaLabel",
              title: "Secondary button label",
              type: "string",
              description: `Example: "Book a 1:1"`,
            }),
            defineField({
              name: "secondaryCtaHref",
              title: "Secondary button URL",
              type: "string",
              description: `Example: "/book?person=ruth-odwyer"`,
            }),
          ],
        },
      ],
      description: "The 4 team cards on the homepage. Order = left to right.",
    }),

    // ---------------------------
    // NEWSLETTER SECTION
    // ---------------------------
    defineField({
      name: "newsletterTitle",
      title: "Newsletter – section title",
      type: "string",
      description: `Big white title on the coloured card.`,
    }),
    defineField({
      name: "newsletterSubtitle",
      title: "Newsletter – section subtitle",
      type: "text",
      rows: 2,
      description: `Short line under the newsletter title.`,
    }),
    defineField({
      name: "newsletterLegal",
      title: "Newsletter – small legal text",
      type: "string",
      description: `Very small text at the bottom, e.g. "No spam. Unsubscribe anytime."`,
    }),
  ],
});
