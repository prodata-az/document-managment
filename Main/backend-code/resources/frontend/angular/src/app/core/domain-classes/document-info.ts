import { DocumentRolePermission } from './document-role-permission';
import { DocumentUserPermission } from './document-user-permission';
import { DocumentMetaData } from './documentMetaData';
import { DocumentVersion } from './documentVersion';

export interface DocumentInfo {
  id?: string;
  name?: string;
  square?: string;
  farmerid?: string;
  violation?: string;
  status?: string;
  district?: string;
  url?: string;
  description?: string;
  createdDate?: Date;
  // createdBy?: string;
  categoryId?: string;
  categoryName?: string;
  documentSource?: string;
  extension?: string;
  isVersion?: boolean;
  viewerType?: string;
  // expiredDate?: Date;
  isAllowDownload?: boolean;
  documentVersions?: DocumentVersion[];
  documentMetaDatas?: DocumentMetaData[];
  documentRolePermissions?: DocumentRolePermission[];
  documentUserPermissions?: DocumentUserPermission[];
  fileData?: any;
  isAssignUser?: any;
}
