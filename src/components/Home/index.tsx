import { Box, Typography } from "@mui/material";
import React from "react";
import { categories, movieType, tvType } from "../../api/tmdbConfig";
import { Button, HeadTitle, Section } from "../../globalStyles";
import HeroSlide from "../HeroSlide";
import MovieList from "../MovieList";

const Home = () => {
  return <>
    <HeroSlide />
    <Section>
      <HeadTitle className="head-title">
        <Typography>Popular Movie</Typography>
        <Button outline small>View more</Button>
      </HeadTitle>
      <MovieList category={categories.movie} type={movieType.popular} />
    </Section>
    <Section>
      <HeadTitle className="head-title">
        <Typography>Upcomming Movie</Typography>
        <Button outline small>View more</Button>
      </HeadTitle>
      <MovieList category={categories.movie} type={movieType.upcoming} />
    </Section>
    <Section>
      <HeadTitle className="head-title">
        <Typography>Popular TV</Typography>
        <Button outline small>View more</Button>
      </HeadTitle>
      <MovieList category={categories.tv} type={tvType.popular} />
    </Section>
    <Section>
      <HeadTitle className="head-title">
        <Typography>On the air tv</Typography>
        <Button outline small>View more</Button>
      </HeadTitle>
      <MovieList category={categories.tv} type={tvType.on_the_air} />
    </Section>
    <Section>
      <HeadTitle className="head-title">
        <Typography>Top rate tv</Typography>
        <Button outline small>View more</Button>
      </HeadTitle>
      <MovieList category={categories.tv} type={tvType.top_rated} />
    </Section>
  </>;
};

export default Home;
