import React from 'react';
import PageContainer from './PageContainer';
import Header from './Header';

export default function Page(props) {
  return (
    <PageContainer comeIn={props.comeIn}>
      <Header title={props.head} />
      {props.children}
    </PageContainer>
  );
}
