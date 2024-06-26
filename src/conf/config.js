const envConfig = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDbId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default envConfig;
