import { redirect } from "next/navigation";

type LegacyBlogDetailProps = {
  params: {
    slug: string;
  };
};

export default function LegacyBlogDetailPage({ params }: LegacyBlogDetailProps) {
  redirect(`/research/${params.slug}`);
}
