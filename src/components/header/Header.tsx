import React, { FormEvent } from 'react';
import { Box, Heading, TextInput } from 'grommet';
import { useAppState, useAppDispatch } from '../../contexts/appContext';
import './Header.css';

export const Header: React.FC = () => {
  const { appId, cityName } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="around"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: 1 }}
    >
      <Heading level="3" margin="none">
        Tramuntana
      </Heading>
      <TextInput
        placeholder="AppId"
        value={appId}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          dispatch({ type: 'setAppId', payload: e.currentTarget.value })
        }
      />
      <TextInput
        placeholder="City"
        value={cityName}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          dispatch({ type: 'setCityName', payload: e.currentTarget.value })
        }
      />
    </Box>
  );
};
