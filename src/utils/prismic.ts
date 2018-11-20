/** */
export function getHtml(line: DataContainer): string {
  let { text } = line;

  line.spans.forEach((span: SpanContainer) => {
    if (span.type === 'hyperlink') {
      const s = text.split('');
      s.splice(
        span.start,
        span.end - span.start,
        // eslint-disable-next-line max-len
        `<a href="${span.data.url}" target="${span.data.target}">${line.text.substring(
          span.start,
          span.end,
        )}</a>`,
      );
      text = s.join('');
    }
  });

  return text;
}

export default function () {
  console.log('This file contains helper utilities for prismic.io');
}
