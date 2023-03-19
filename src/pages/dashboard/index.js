import { getSession } from "next-auth/react";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <h2> Dashboard</h2>
    </div>
  );
};

export default dashboard;


export async function getServerSideProps({ req }) {

    const session = await getSession({ req });
  
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: { session },
    };
  }
  