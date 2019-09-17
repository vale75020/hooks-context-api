import React from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div className="componentC">
                    <h1>Hooks Component C</h1>
                    <h4>User context value: {user}</h4>
                    <h4>channel context value {channel}</h4>
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentC;
