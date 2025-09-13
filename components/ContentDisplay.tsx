
import React from 'react';

interface ContentDisplayProps {
  content: string | null;
}

const markdownToHtml = (text: string): string => {
    if (!text) return "";

    // Inline formatting first
    let processedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');

    const lines = processedText.split('\n');
    let html = '';
    let inList = false;

    for (const line of lines) {
        if (/^\s*$/.test(line)) { // Empty line
            if (inList) {
                html += '</ul>\n';
                inList = false;
            }
            continue;
        }

        // Headings
        if (line.startsWith('## ')) {
            if (inList) { html += '</ul>\n'; inList = false; }
            html += `<h2>${line.substring(3)}</h2>\n`;
            continue;
        }
        if (line.startsWith('# ')) {
            if (inList) { html += '</ul>\n'; inList = false; }
            html += `<h1>${line.substring(2)}</h1>\n`;
            continue;
        }

        // List items
        if (line.startsWith('* ') || line.startsWith('- ')) {
            if (!inList) {
                html += '<ul>\n';
                inList = true;
            }
            html += `<li>${line.substring(2)}</li>\n`;
            continue;
        }
        
        // If we are here, it's not a list item, so end any open list
        if (inList) {
            html += '</ul>\n';
            inList = false;
        }

        // Paragraphs
        html += `<p>${line}</p>\n`;
    }
    
    // Close any list that was at the end of the content
    if (inList) {
        html += '</ul>\n';
    }

    return html;
};


const ContentDisplay: React.FC<ContentDisplayProps> = ({ content }) => {
  if (!content) {
    return null;
  }

  const formattedContent = markdownToHtml(content);

  return (
    <div 
      className="prose lg:prose-xl max-w-none text-rock-gray"
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  );
};

export default ContentDisplay;
