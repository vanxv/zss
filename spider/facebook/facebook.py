import facebook
def main():
    cfg={
        "page_id":"688132348036120",
        "access_token":"EAACEdEose0cBAPJg8IgGkl4Y1smMWQt09ZCXIIw87wUugd1QIIlhMrxIh2wZC0iUtARy8sxR5wl5gEIBgvl7SovuxtovRVKdzRQrdVjpZCi1lr3WWnv6OjOkBDm5nJpVJ2uUGgT0qdXcd8jyCxNXjfW4ZCTy6f9Bgv8OrfdiEVVNK3OBoCpa4piZBciaV2FwZD"
    }
    api=get_api(cfg)
    msg="welcome to vanxv api pages"
    status=api.put_wall_post(msg)

def get_api(cfg):
    graph=facebook.GraphAPI(cfg['access_token'])
    resp=graph.get_object('me/accounts')
    page_access_token=None
    for page in resp['data']:
        if page['id']==cfg["page_id"]:
            page_access_token=page['access_token']
    graph=facebook.GraphAPI(page_access_token)
    return graph

if __name__ == "__main__":
    main()