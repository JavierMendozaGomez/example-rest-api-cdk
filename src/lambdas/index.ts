
export const handler = async ():Promise<any> => {
	return {
		statusCode: 200,
		headers:{},
		body: JSON.stringify({
			currentTimeStamp: new Date().toISOString(),
			message: 'Hello this is your first CDK API'
		})
	}
};
