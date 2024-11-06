import * as React from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/on-boarding' });
  }, []);


  return <p>home</p>;
}
