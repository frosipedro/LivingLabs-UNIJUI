import { Link } from "@tanstack/react-router";
import type { NewsItem } from "@/content/api";
import { LAB_LABEL, formatDate } from "@/content/api";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link to="/noticias/$slug" params={{ slug: item.slug }} className="group block hover-lift">
      <div className="relative overflow-hidden rounded-xl aspect-4/3 bg-muted">
        <img
          src={item.cover}
          alt={item.title}
          loading="lazy"
          width={1280}
          height={800}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {item.lab && (
            <>
              <span className="font-medium text-foreground">{LAB_LABEL[item.lab]}</span>
              <span aria-hidden>·</span>
            </>
          )}
          <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
        </div>
        <h3 className="mt-2 font-display font-semibold text-lg leading-snug group-hover:underline underline-offset-4 decoration-1">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
      </div>
    </Link>
  );
}
