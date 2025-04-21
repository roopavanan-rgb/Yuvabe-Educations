import { defineConfig } from "tinacms";

export default defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/blogs",
      publicFolder: "public",
    },
  },
  contentApiUrlOverride: "http://localhost:4001/graphql", // Local backend
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blogs",
        path: "content/blogs",
        format: "md", // Or "mdx"
        ui: {
          filename: {
            showFirst: true,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "isfeaturedpost",
            label: "Is Featured Post",
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            required: true,
          },
          {
            name: "imagePosition",
            label: "Featured Image Position",
            type: "string", // Custom position for the featured image
            description:
              "Set custom position for the featured image (e.g., '50% 30%' or 'center')",
            required: false,
            ui: {
              component: "text", // A single line input for entering positions like '50% 30%' or 'center'
            },
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
          },
          {
            type: "datetime",
            name: "datePublished",
            label: "Date Published",
            required: true,
          },
          {
            type: "string",
            name: "readingTime",
            label: "Reading Time (e.g. '3 mins')",
            ui: {
              defaultValue: "3 mins", // Use this to set default value in the UI
            },
          },
          {
            type: "string",
            name: "category",
            label: "Categories",
            list: true,
            options: [
              { label: "Our Youth", value: "our-youth" },
              { label: "We Work", value: "we-work" },
              { label: "We Serve", value: "we-serve" },
              { label: "We Evolve", value: "we-evolve" },
              {
                label: "Sustainability Initiatives",
                value: "sustainability-initiatives",
              },
              { label: "Partnerships", value: "partnerships" },
            ],
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            options: [
              { label: "Auroville", value: "auroville" },
              { label: "Yuvabe", value: "yuvabe" },
              { label: "Evolve", value: "evolve" },
              { label: "Expert Talks", value: "expert-talks" },
              { label: "Youth empowerment", value: "youth-empowerment" },
              { label: "sustainability", value: "sustainability" },
              { label: "Our Youth", value: "our-youth" },
              { label: "Empowerment", value: "empowerment" },
              { label: "Education", value: "education" },
              { label: "Workshops", value: "workshops" },
              { label: "Digital Marketing", value: "digital-marketing" },
              { label: "Youth", value: "youth" },
              { label: "Work", value: "work" },
              { label: "Impact Assessment", value: "impact-assessment" },
            ],
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            options: [
              { label: "John Doe", value: "john-doe" },
              { label: "Jane Smith", value: "jane-smith" },
            ],
          },
        ],
      },
    ],
  },
});
