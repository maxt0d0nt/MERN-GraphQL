import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
{
    projects {
        _id
        name
        description
    }
}
`;

export const CREATE_PROJECT = gql`
mutattion ($name: String, $description: String) {
    createProject(name: $name, $description) {
        _id
        name
        description
    }
}
`;