"use client";

import React from 'react'
import { Layout } from '@/components'
import { useStateContext } from "@/context";

const test = () => {
    const cont = useStateContext()
    console.log("Hi", cont)
  return (
    <Layout>
        Hi
    </Layout>
  )
}

export default test