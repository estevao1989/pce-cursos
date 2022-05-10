import React from 'react'
import { screen, render, userEvent } from './index'
import App from '../App'
import { createMemoryHistory } from 'history'
import { DataProvider } from '../data/DataContext'


describe('MainRoutes', () => {

    it('should navigate to home page when fake-route is requested', () => {

        const history = createMemoryHistory()
        render(
            <DataProvider>
                <App></App>
            </DataProvider>
        )
        history.push('/fakeroute/')
        expect(history.location.pathname).toMatch('/')
    })

})