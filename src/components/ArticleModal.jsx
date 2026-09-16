import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Clock, Calendar, BookOpen } from 'lucide-react';

const renderInlineMarkdown = (text) => {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
};

const renderArticleContent = (content) => {
  const lines = content.trim().split('\n');
  const blocks = [];
  let paragraph = [];
  let list = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push(
        <p key={`paragraph-${blocks.length}`}>
          {renderInlineMarkdown(paragraph.join(' '))}
        </p>
      );
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length > 0) {
      blocks.push(
        <ul key={`list-${blocks.length}`} className="list-disc pl-5 space-y-1">
          {list.map((item, index) => (
            <li key={index}>{renderInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      return;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      list.push(line.slice(2));
      return;
    }

    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3 key={`heading-${blocks.length}`} className="font-headline text-xl font-semibold text-[#4A2C1B] pt-3">
          {renderInlineMarkdown(line.slice(4))}
        </h3>
      );
      return;
    }

    if (line.startsWith('#### ')) {
      flushParagraph();
      flushList();
      blocks.push(
        <h4 key={`subheading-${blocks.length}`} className="font-headline text-base font-semibold text-[#6B4326] pt-2">
          {renderInlineMarkdown(line.slice(5))}
        </h4>
      );
      return;
    }

    paragraph.push(line);
  });

  flushParagraph();
  flushList();
  return blocks;
};

export const ArticleModal = ({ article, onClose }) => {
  const { lang } = useLanguage();

  if (!article) return null;

  const title = lang === 'id' ? article.titleId : article.titleEn;
  const category = lang === 'id' ? article.categoryId : article.categoryEn;
  const content = lang === 'id' ? article.contentId : article.contentEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#F8F5EF] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#c1c8c4]/40 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#F8F5EF]/95 backdrop-blur-md px-6 py-4 border-b border-[#c1c8c4]/30 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="bg-[#E8DCC8] text-[#00261d] px-3 py-1 rounded-md text-xs font-bold uppercase">
              {category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#414845] hover:bg-[#E8DCC8]/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-[#00261d] leading-tight">
              {title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-[#414845]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#3b6754]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#3b6754]" />
                {article.readTime}
              </span>
            </div>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-[#414845] leading-relaxed space-y-4 border-t border-[#c1c8c4]/30 pt-6">
            {renderArticleContent(content)}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#F8F5EF] px-6 py-4 border-t border-[#c1c8c4]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#183c32] hover:bg-[#3b6754] text-[#F8F5EF] rounded-lg font-semibold text-xs transition-colors"
          >
            {lang === 'id' ? 'Selesai Membaca' : 'Close Article'}
          </button>
        </div>
      </div>
    </div>
  );
};
