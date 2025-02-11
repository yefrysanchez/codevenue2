import React from "react";

const GenrePage = async ({
  params,
}: {
  params: {
    genre: string;
  };
}) => {
  const { genre } = await params;
  return <div>{genre}</div>;
};

export default GenrePage;
