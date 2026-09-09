import type { Member } from "@/content/api";
import { LAB_LABEL } from "@/content/api";

export function MemberCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="group rounded-xl border border-border bg-card p-6 hover-lift">
      <div className="size-16 rounded-full bg-muted flex items-center justify-center font-display font-semibold text-xl">
        {initials}
      </div>
      <h3 className="mt-5 font-display font-semibold text-lg">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.role}</p>
      {member.lab && (
        <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
          {LAB_LABEL[member.lab]}
        </span>
      )}
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
    </div>
  );
}
