import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      domain: process.env.DOMAIN,
      expires: new Date(Date.now() + (20 * 60 * 1000)), 
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true
    }
  });

export { getSession, commitSession, destroySession };