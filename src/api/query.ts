import { gql } from "@apollo/client";

export const GET_ALL_PEOPLES = gql`
  query People {
    persons @rest(path: "people") {
      results {
        name
        height
      }
    }
  }
`;

export const GET_ONE_PEOPLE = gql`
  query GetPeople($id: String!) {
    one_person(id: $id) @rest(path: "people/{args.id}") {
      name
      height
      hair_color
      skin_color
      eye_color
      gender
    }
  }
`;

export const GET_PLANET = gql`
  query GetPlanet($id: String!) {
    planet(id: $id) @rest(path: "planets/{args.id}") {
      name
      population
      residents
      gravity
    }
  }
`;
