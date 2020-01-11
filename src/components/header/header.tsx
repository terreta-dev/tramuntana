import React, { FormEvent } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/appContext';
import './header.css';

export const Header: React.FC = () => {
  const { appId } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div className="header width-full">
      <h4>Your current appId is: {appId}</h4>
      <h4>Set your appId:</h4>
      <input
        type="text"
        placeholder="appId"
        name="appId-name"
        value={appId}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          dispatch({ type: 'setAppId', appId: e.currentTarget.value })
        }
      />
    </div>
  );
};
