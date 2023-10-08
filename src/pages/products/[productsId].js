import Image from "next/image";
import { useRouter } from "next/router";
import Rating from "react-rating";
import ReactStars from "react-stars";


//product 

export async function getStaticPaths() {
    try {
        const res = await fetch("http://localhost:3004/featuredProducts");
        const data = await res.json();

        if (!data || !Array.isArray(data)) {
            console.error("Invalid data format from API:", data);
            return {
                paths: [],
                fallback: false,
            };
        }

        const paths = data.map((d) => ({
            params: {
                productsId: d?.id?.toString(),
            },
        }));

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            paths: [],
            fallback: false,
        };
    }
}


const ProductDetailsPage = ({ data }) => {
    const router = useRouter();

    const starStyles = {
        color: 'text-yellow-600',           // Color for filled stars
        emptyColor: 'text-gray-300',        // Color for empty stars
        size: 'text-2xl',                   // Size of stars
        readonly: true,                    // Make the rating readonly
    };


    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    console.log("Data in ProductDetailsPage:", data);


    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <Image src={data.image} alt="product" height={500} width={500} />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">{data.productName}</h2>
                    <p className="text-gray-600 mt-2">{data.category}</p>
                    <p className="text-2xl font-semibold text-green-600 mt-2">Price: {data.price}</p>
                    <p className={`text-2xl ${data.status === 'In Stock' ? 'text-green-600' : 'text-red-600'} mt-2`}>
                        Status: {data.status}
                    </p>
                    <ReactStars
                        count={5}
                        size={24}
                        color2={'#ffd700'}
                        value={data.rating} // Set the value prop to dynamically set the rating
                    />
                    {/* Display Key Features */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Key Features:</h3>
                        <ul className="list-disc list-inside mt-2">
                            {Object.entries(data.keyFeatures).map(([key, value]) => (
                                <li key={key} className="text-lg">
                                    <strong>{key}: </strong> {value}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* <p className="text-2xl mt-4">Individual Rating: {data.individualRating}</p>
                    <p className="text-2xl">Average Rating: {data.averageRating}</p> */}

                    {/* Display Reviews */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Reviews:</h3>
                        <ul>
                            {data.reviews.map((review, index) => (
                                <li key={index} className="mt-4">
                                    <strong className="text-xl">{review.username}</strong><br />
                                    <div className="mt-2">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color2={'#ffd700'}
                                            value={data.individualRating} // Set the value prop to dynamically set the rating
                                        />
                                    </div>
                                    <p className="text-lg mt-2">{review.comment}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetailsPage;

export const getStaticProps = async ({ params }) => {
    const productId = params.productsId;
    console.log("productId:", productId); // Add this line to check productId

    const res = await fetch(`http://localhost:3004/featuredProducts/${productId}`);
    const data = await res.json();
    console.log("Data fetched in getStaticProps:", data);

    return {
        props: {
            data,
        },
    };
};



