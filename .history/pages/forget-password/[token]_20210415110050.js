import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import Router from 'next/router'
import { database } from '@middlewares/index'
import { findTokenByIdAndType } from '@/db/index'


const ResetPasswordTokenPage = ({ valid, token }) => {
    async function handleSubmit(event) {
        event.preventDefault();
        const body = {
            password: event.currentTarget.password.value,
            token,
        };

        const res = await fetch('/api/user/password/reset', {
            method: 'PUT',
            headers: { 'ContentType'}
        })
    }
}