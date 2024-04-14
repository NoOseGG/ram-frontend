import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import styles from ".//Locations.module.scss";

import { ILocationsResponse } from "../../../interfaces/app.interface";
import { LocationItem } from "./LocationItem/LocationItem";

const getLocations = async () => {
  return axios.get<ILocationsResponse>(
    `https://rickandmortyapi.com/api/location/`
  );
};

const Locations: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocations(),
    select: ({ data }) => data,
  });

  const handleClickShowMore = () => {
    navigate("/location/");
  };

  return (
    <div className={styles.container}>
      <>
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
      </>
    </div>
  );
};

export { Locations };
