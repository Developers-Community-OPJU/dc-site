var editor = new EditorJS({
    holder: "editorjs",
    data: {
        time: 1626309839528,
        blocks: [
            {
                id: "wQUt92DND3",
                type: "header",
                data: {
                    text: "Editor.js",
                    level: 2,
                },
            },
            {
                id: "Mb247ZZKe4",
                type: "paragraph",
                data: {
                    text:
                        "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
                },
            },
            {
                id: "cN_U0RUKzp",
                type: "header",
                data: {
                    text: "Key features",
                    level: 3,
                },
            },
            {
                id: "KmyfIIUDmR",
                type: "list",
                data: {
                    style: "unordered",
                    items: [
                        "It is a block-styled editor",
                        "It returns clean data output in JSON",
                        "Designed to be extendable and pluggable with a simple API",
                    ],
                },
            },
            {
                id: "7ODAkydfWT",
                type: "header",
                data: {
                    text: "What does it mean «block-styled editor»",
                    level: 3,
                },
            },
            {
                id: "QLh-5b2SDK",
                type: "paragraph",
                data: {
                    text:
                        'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
                },
            },
            {
                id: "ub7bL7tbAT",
                type: "paragraph",
                data: {
                    text:
                        'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
                },
            },
            {
                id: "hJ_xmGUAZ1",
                type: "header",
                data: {
                    text: "What does it mean clean data output",
                    level: 3,
                },
            },
            {
                id: "ZBHq0P4Krq",
                type: "paragraph",
                data: {
                    text:
                        "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
                },
            },
            {
                id: "X6QxpPv7F8",
                type: "paragraph",
                data: {
                    text:
                        'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
                },
            },
            {
                id: "0YnT5i2nS0",
                type: "paragraph",
                data: {
                    text:
                        "Clean data is useful to sanitize, validate and process on the backend.",
                },
            },
            {
                id: "f9EUaSKIDm",
                type: "delimiter",
                data: {},
            },
            {
                id: "08Odu1lavr",
                type: "paragraph",
                data: {
                    text:
                        "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
                },
            },
            {
                id: "F3LHQdATjt",
                type: "image",
                data: {
                    file: {
                        url: "https://codex.so/public/app/img/external/codex2x.png",
                    },
                    caption: "",
                    withBorder: false,
                    stretched: false,
                    withBackground: false,
                },
            },
        ],
        version: "2.22.0",
    },
    tools: {
        header: Header,
        list: List,
        quote: Quote,
        code: Code,
        image,
        inlineCode,
        link,
        paragraph,
        personality,
        raw,
        table,
        warning,
        embed,
        delimiter,
    },
    onChange: () => {
        console.log("Changed");
    },
    onReady: () => {
        console.log("Ready");
    },
});