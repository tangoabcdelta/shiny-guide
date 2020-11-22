/* @flow */
import * as React from "react";

import Card from "components/atoms/card";
import Button from "components/atoms/button";
import Title from "components/atoms/title";

type Props = {
  children?: React.Node,
  className?: string,
  title: string,
  button?: string,
};

const Block = (props: Props): React.Element<*> => (
  <Card className={props.className}>
    <Title>{props.title}</Title>
    {props.children}
    {props.button !== "" && <Button>{props.button}</Button>}
  </Card>
);

Block.defaultProps = {
  className: "",
  children: "",
  title: "",
  button: "",
};

export default Block;
