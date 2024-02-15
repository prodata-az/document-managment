export interface DocumentView {
  documentId: string;
  isRestricted: boolean;
  extension: string;
  name: string;
  square: string;
  violation: string;
  status: string;
  district: string;
  isVersion: boolean;
  isFromPreview?:boolean;
  id?: string;
}
