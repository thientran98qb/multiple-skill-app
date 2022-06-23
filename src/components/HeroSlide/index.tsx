import { useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { configApi } from "../../api/configApi";
import { movieType } from "../../api/tmdbConfig";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fectchMovieList,
  getAllMovieByType,
} from "../../features/movieInfo/movieInfoSlice";
import { Button } from "../../globalStyles";
import { Movie } from "../../models";
import {
  ButtonWrapper,
  HeroContainer,
  LeftItem,
  OverviewItem,
  RightItem,
  SlideItem,
  TitleItem,
} from "./HeroSlideStyles";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getAllMovieByType);

  useEffect(() => {
    try {
      dispatch(
        fectchMovieList({
          type: movieType.popular,
          params: {
            page: 1,
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <Swiper
      modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
      }}
    >
      {movies.map((movie, key) => (
        <SwiperSlide key={key}>
          {({ isActive }) => (
            <HeroSildeItem
              item={movie}
              className={`${isActive ? "active" : ""}`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
interface ItemProps {
  item: Movie;
  className: string;
}
const HeroSildeItem = (props: ItemProps) => {
  const item = props.item;
  const background = configApi.getImageOriginal(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <HeroContainer image={background} className={props.className}>
      <SlideItem className="slide-item">
        <LeftItem>
          <TitleItem className="title">{item.title}</TitleItem>
          <OverviewItem className="overview">{item.overview}</OverviewItem>
          <ButtonWrapper className="btns">
            <Button>Watch now</Button>
            <Button outline>Watch trailer</Button>
          </ButtonWrapper>
        </LeftItem>
        <RightItem>
          <img src={configApi.getImageW500(item.poster_path)} alt="" />
        </RightItem>
      </SlideItem>
    </HeroContainer>
  );
};
export default HeroSlide;
