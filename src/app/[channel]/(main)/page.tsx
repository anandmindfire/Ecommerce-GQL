import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Banner } from "@/ui/components/Banner";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
	title: "Ecom, powered by Saleor & Next.js",
	description:
		"e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
};

export default async function Page({ params }: { params: { channel: string } }) {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!data.collection?.products) {
		return null;
	}

	const products = data.collection?.products.edges.map(({ node: product }) => product);

	return (
		<section className="mx-auto max-w-7xl p-2 pb-16">
			<div className="mb-6">
				<Banner />
			</div>

			<ProductList products={products} />
		</section>
	);
}
