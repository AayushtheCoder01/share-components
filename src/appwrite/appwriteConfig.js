import {Client, Account, Databases}  from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65e8b6e03244c025a534")

export const account = new Account(client)


export const databases = new Databases(client, "65e8b719ab2350ba6fb4")