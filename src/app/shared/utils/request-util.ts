import { HttpHeaders, HttpParams } from '@angular/common/http';

export const createRequestOption = (req?: any) => {
  const options = {
    headers: new HttpHeaders(),
    params: new HttpParams(),
  };
  if (req) {
    const params: HttpParams = new HttpParams();
    params.append('page', req.page);
    params.append('size', req.size);
    if (req.sort) {
      params.append('sort', req.sort);
    }
    if (req.statuses) {
      params.append('statuses', req.statuses);
    }
    if (req.organizationIds) {
      params.append('organizationIds', req.organizationIds);
    }

    params.append('query', req.query);
    params.append('name', req.name);
    params.append('iin', req.iin);
    params.append('code', req.code);

    options.params = params;
  }
  return options;
};
