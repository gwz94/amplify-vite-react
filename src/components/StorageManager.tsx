import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

export default function DefaultStorageManagerExample() {
  return (
    <StorageManager
      acceptedFileTypes={["image/*"]}
      path="public"
      maxFileCount={1}
      isResumable
    />
  );
}
