import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import styles from "./Locations.module.scss";

import { ILocationsResponse } from "../../../interfaces/app.interface";
import { LocationItem } from "./LocationItem/LocationItem";
import sessionStorageService from "../../../services/sessionStorage.service";

const getLocations = async (page: number) => {
  return axios.get<ILocationsResponse>(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  );
};

const Locations: React.FC = () => {
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(sessionStorageService.getItemLocationShowMore());
  const { data, isLoading } = useQuery({
    queryKey: ["locations"],
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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Locations</h2>
      <div className={styles.locationContainer}>
        {data?.results.slice(0, 8).map((location, index) => (
          <LocationItem location={location} key={location.id} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.buttonShowMore}
          onClick={handleClickShowMore}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export { Locations };
