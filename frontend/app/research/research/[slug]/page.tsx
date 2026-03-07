import { redirect } from "next/navigation";

type LegacyResearchDetailProps = {
  params: {
    slug: string;
  };
};

export default function LegacyResearchDetailPage({ params }: LegacyResearchDetailProps) {
  redirect(`/research/${params.slug}`);
}
