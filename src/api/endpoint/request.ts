export async function getRequest(url: string) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw Error(
        `Failed to fetch speakers data: ${response.status} ${response.statusText}`
      )
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching speakers data:', error)
    throw error
  }
}
