import * as msal from '@azure/msal-browser'

/**
 * List the requested scopes (aka. the requested permissions)
 */
const requestedScopes = {
  scopes: ["User.Read"]
}

const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: "e8137439-4d1d-462d-a85f-f81cfea8f0d8"
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
})

async function initializeMsal() {
  await msalInstance.initialize();
}
export async function signInAndGetUser () {
  await initializeMsal();
  const authResult = await msalInstance.loginPopup(requestedScopes)
  msalInstance.setActiveAccount(authResult.account)
  return authResult.account
}

export function signOut() {
  msalInstance.logoutPopup();
 }