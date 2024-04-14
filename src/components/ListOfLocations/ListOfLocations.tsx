import React, { useState } from "react";

import styles from "./ListOfLocations.module.scss";
import sessionStorageService from "../../services/sessionStorage.service";
import axios from "axios";
import { ILocationsResponse } from "../../interfaces/app.interface";
import { useQuery } from "@tanstack/react-query";
import { LocationItem } from "../Feed/Locations/LocationItem/LocationItem";
import ButtonNavigate from "../Feed/ButtonsNavigate/ButtonNavigate";

const getLocations = async (page: number) => {
  return axios.get<ILocationsResponse>(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  );
};

const ListOfLocations: React.FC = () => {
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(
    sessionStorageService.getItemLocationShowMore()
  );
  const { data, isLoading } = useQuery({
    queryKey: ["locations", page],
    queryFn: () => getLocations(page),
    select: ({ data }) => data,
  });

  const handleClickShowMore = () => {
    sessionStorageService.setItemLocationShowMore();
    setIsShowMore("true");
  };

  const handleClickHideMore = () => {
    sessionStorageService.removeItemLocationShowMore();
    setIsShowMore(null);
  };

  const handleClickNextButton = () => {
    setPage((prev) => prev + 1);
  };

  const handleClickPreviousButton = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <>
        <h2 className={styles.title}>Locations</h2>
        <div className={styles.locationContainer}>
          {data?.results.map((location) => (
            <LocationItem location={location} key={location.id} />
          ))}
        </div>
        <ButtonNavigate
          isPrev={data?.info.prev}
          isNext={data?.info.next}
          handleClickPreviousButton={handleClickPreviousButton}
          handleClickNextButton={handleClickNextButton}
          showing={`Showing ${data?.results[0].id} to ${
            data?.results[data.results.length - 1].id
          } of ${data?.info.count} results`}
        />
      </>
    </div>
  );
};

export { ListOfLocations };
