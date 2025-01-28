import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/api";

export function CardList() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovies,
    });
console.log(data);
    if (isLoading) {
        return <div className="text-center py-10">Caricamento...</div>;
    }

    if (isError) {
        return <div className="text-center py-10 text-red-600">Errore: {error.message}</div>;
    }

    // Converti l'oggetto in array
    const moviesArray = data ? Object.values(data) : [];

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Movie Collection
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
                {moviesArray.map((movie) => (
                    <Card
                        director={movie.director}
                        genre={movie.genre}
                        id={movie.id}
                        release_year={movie.release_year}
                        title={movie.title}
                        key={movie.id}
                        image={movie.image}
                        slug={movie.slug}
                    />
                ))}
            </div>
        </div>
    );
}