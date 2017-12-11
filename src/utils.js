export const duration = (durationMillis) => {
  const duration = durationMillis / 1000
  const seconds = Math.floor(duration % 60)
  const minutes = Math.floor(duration / 60) % 60
  const hours = Math.floor(duration / (60 * 60)) % 24
  const days = Math.floor(duration / (60 * 60 * 24)) % 365
  if (minutes === 0) {
    return `${seconds} sec`
  } else if (hours === 0) {
    return `${minutes} min ${seconds} sec`
  } else if (days === 0) {
    return `${hours} hours ${minutes} min ${seconds} sec`
  } else {
    return `${days} days ${hours} hours ${minutes} min ${seconds} sec`
  }
}

export const durationApproximation = (durationMillis) => {
  const duration = durationMillis / 1000
  const seconds = Math.floor(duration % 60)
  const minutes = Math.floor(duration / 60) % 60
  const hours = Math.floor(duration / (60 * 60)) % 24
  const days = Math.floor(duration / (60 * 60 * 24)) % 365
  if (minutes === 0) {
    return `${seconds} sec`
  } else if (hours === 0) {
    return `${minutes} min`
  } else if (days === 0) {
    return `${hours} hours`      
  } else {
    return `${days} days`
  }
}

export const addDuration = job => {
  const now = Date.now()
  const created = new Date(job.created).getTime()
  const processing = job.processing ? new Date(job.processing).getTime() : null
  return {
    ...job,
    queueDuration: ((processing || now ) - created)
  }
}