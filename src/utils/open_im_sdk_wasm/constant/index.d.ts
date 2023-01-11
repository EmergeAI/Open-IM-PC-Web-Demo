export declare const DatabaseErrorCode: {
    ErrorInit: number;
    ErrorNoRecord: number;
    ErrorDBTimeout: number;
};
export declare enum CbEvents {
    LOGIN = "Login",
    ONCONNECTFAILED = "OnConnectFailed",
    ONCONNECTSUCCESS = "OnConnectSuccess",
    ONCONNECTING = "OnConnecting",
    ONKICKEDOFFLINE = "OnKickedOffline",
    ONSELFINFOUPDATED = "OnSelfInfoUpdated",
    ONUSERTOKENEXPIRED = "OnUserTokenExpired",
    ONPROGRESS = "OnProgress",
    ONRECVNEWMESSAGE = "OnRecvNewMessage",
    ONRECVNEWMESSAGES = "OnRecvNewMessages",
    ONRECVMESSAGEREVOKED = "OnRecvMessageRevoked",
    ONNEWRECVMESSAGEREVOKED = "OnNewRecvMessageRevoked",
    ONRECVC2CREADRECEIPT = "OnRecvC2CReadReceipt",
    ONRECVGROUPREADRECEIPT = "OnRecvGroupReadReceipt",
    ONCONVERSATIONCHANGED = "OnConversationChanged",
    ONNEWCONVERSATION = "OnNewConversation",
    ONSYNCSERVERFAILED = "OnSyncServerFailed",
    ONSYNCSERVERFINISH = "OnSyncServerFinish",
    ONSYNCSERVERSTART = "OnSyncServerStart",
    ONTOTALUNREADMESSAGECOUNTCHANGED = "OnTotalUnreadMessageCountChanged",
    ONBLACKADDED = "OnBlackAdded",
    ONBLACKDELETED = "OnBlackDeleted",
    ONFRIENDAPPLICATIONACCEPTED = "OnFriendApplicationAccepted",
    ONFRIENDAPPLICATIONADDED = "OnFriendApplicationAdded",
    ONFRIENDAPPLICATIONDELETED = "OnFriendApplicationDeleted",
    ONFRIENDAPPLICATIONREJECTED = "OnFriendApplicationRejected",
    ONFRIENDINFOCHANGED = "OnFriendInfoChanged",
    ONFRIENDADDED = "OnFriendAdded",
    ONFRIENDDELETED = "OnFriendDeleted",
    ONJOINEDGROUPADDED = "OnJoinedGroupAdded",
    ONJOINEDGROUPDELETED = "OnJoinedGroupDeleted",
    ONGROUPMEMBERADDED = "OnGroupMemberAdded",
    ONGROUPMEMBERDELETED = "OnGroupMemberDeleted",
    ONGROUPAPPLICATIONADDED = "OnGroupApplicationAdded",
    ONGROUPAPPLICATIONDELETED = "OnGroupApplicationDeleted",
    ONGROUPINFOCHANGED = "OnGroupInfoChanged",
    ONGROUPMEMBERINFOCHANGED = "OnGroupMemberInfoChanged",
    ONGROUPAPPLICATIONACCEPTED = "OnGroupApplicationAccepted",
    ONGROUPAPPLICATIONREJECTED = "OnGroupApplicationRejected",
    ONRECEIVENEWINVITATION = "OnReceiveNewInvitation",
    ONINVITEEACCEPTED = "OnInviteeAccepted",
    ONINVITEEREJECTED = "OnInviteeRejected",
    ONINVITATIONCANCELLED = "OnInvitationCancelled",
    ONHANGUP = "OnHangUp",
    ONINVITATIONTIMEOUT = "OnInvitationTimeout",
    ONINVITEEACCEPTEDBYOTHERDEVICE = "OnInviteeAcceptedByOtherDevice",
    ONINVITEEREJECTEDBYOTHERDEVICE = "OnInviteeRejectedByOtherDevice",
    ONORGANIZATIONUPDATED = "OnOrganizationUpdated"
}
export declare enum RequestFunc {
    INITSDK = "InitSDK",
    LOGIN = "Login",
    LOGOUT = "Logout",
    GETLOGINSTATUS = "GetLoginStatus",
    GETLOGINUSER = "GetLoginUser",
    GETSELFUSERINFO = "GetSelfUserInfo",
    CREATETEXTMESSAGE = "CreateTextMessage",
    CREATETEXTATMESSAGE = "CreateTextAtMessage",
    CREATEADVANCEDTEXTMESSAGE = "CreateAdvancedTextMessage",
    CREATEADVANCEDQUOTEMESSAGE = "CreateAdvancedQuoteMessage",
    CREATEIMAGEMESSAGEFROMBYURL = "CreateImageMessageByURL",
    CREATESOUNDMESSAGEBYURL = "CreateSoundMessageByURL",
    CREATEVIDEOMESSAGEBYURL = "CreateVideoMessageByURL",
    CREATEFILEMESSAGEBYURL = "CreateFileMessageByURL",
    CREATEIMAGEMESSAGEFROMFULLPATH = "CreateImageMessageFromFullPath",
    CREATESOUNDMESSAGEFROMFULLPATH = "CreateSoundMessageFromFullPath",
    CREATEVIDEOMESSAGEFROMFULLPATH = "CreateVideoMessageFromFullPath",
    CREATEFILEMESSAGEFROMFULLPATH = "CreateFileMessageFromFullPath",
    CREATELOCATIONMESSAGE = "CreateLocationMessage",
    CREATECUSTOMMESSAGE = "CreateCustomMessage",
    CREATEMERGERMESSAGE = "CreateMergerMessage",
    CREATEFORWARDMESSAGE = "CreateForwardMessage",
    CREATEQUOTEMESSAGE = "CreateQuoteMessage",
    CREATECARDMESSAGE = "CreateCardMessage",
    CREATEFACEMESSAGE = "CreateFaceMessage",
    SENDMESSAGE = "SendMessage",
    SENDMESSAGENOTOSS = "SendMessageNotOss",
    GETHISTORYMESSAGELIST = "GetHistoryMessageList",
    GETADVANCEDHISTORYMESSAGELIST = "GetAdvancedHistoryMessageList",
    GETHISTORYMESSAGELISTREVERSE = "GetHistoryMessageListReverse",
    REVOKEMESSAGE = "RevokeMessage",
    SETONECONVERSATIONPRIVATECHAT = "SetOneConversationPrivateChat",
    DELETEMESSAGEFROMLOCALSTORAGE = "DeleteMessageFromLocalStorage",
    DELETEMESSAGEFROMLOCALANDSVR = "DeleteMessageFromLocalAndSvr",
    DELETECONVERSATIONFROMLOCALANDSVR = "DeleteConversationFromLocalAndSvr",
    DELETEALLCONVERSATIONFROMLOCAL = "DeleteAllConversationFromLocal",
    DELETEALLMSGFROMLOCALANDSVR = "DeleteAllMsgFromLocalAndSvr",
    DELETEALLMSGFROMLOCAL = "DeleteAllMsgFromLocal",
    MARKSINGLEMESSAGEHASREAD = "MarkSingleMessageHasRead",
    INSERTSINGLEMESSAGETOLOCALSTORAGE = "InsertSingleMessageToLocalStorage",
    INSERTGROUPMESSAGETOLOCALSTORAGE = "InsertGroupMessageToLocalStorage",
    TYPINGSTATUSUPDATE = "TypingStatusUpdate",
    MARKC2CMESSAGEASREAD = "MarkC2CMessageAsRead",
    MARKMESSAGEASREADBYCONID = "MarkMessageAsReadByConID",
    CLEARC2CHISTORYMESSAGE = "ClearC2CHistoryMessage",
    CLEARC2CHISTORYMESSAGEFROMLOCALANDSVR = "ClearC2CHistoryMessageFromLocalAndSvr",
    CLEARGROUPHISTORYMESSAGE = "ClearGroupHistoryMessage",
    CLEARGROUPHISTORYMESSAGEFROMLOCALANDSVR = "ClearGroupHistoryMessageFromLocalAndSvr",
    ADDFRIEND = "AddFriend",
    SEARCHFRIENDS = "SearchFriends",
    GETDESIGNATEDFRIENDSINFO = "GetDesignatedFriendsInfo",
    GETRECVFRIENDAPPLICATIONLIST = "GetRecvFriendApplicationList",
    GETSENDFRIENDAPPLICATIONLIST = "GetSendFriendApplicationList",
    GETFRIENDLIST = "GetFriendList",
    SETFRIENDREMARK = "SetFriendRemark",
    ADDBLACK = "AddBlack",
    GETBLACKLIST = "GetBlackList",
    REMOVEBLACK = "RemoveBlack",
    CHECKFRIEND = "CheckFriend",
    ACCEPTFRIENDAPPLICATION = "AcceptFriendApplication",
    REFUSEFRIENDAPPLICATION = "RefuseFriendApplication",
    DELETEFRIEND = "DeleteFriend",
    GETUSERSINFO = "GetUsersInfo",
    SETSELFINFO = "SetSelfInfo",
    GETALLCONVERSATIONLIST = "GetAllConversationList",
    GETCONVERSATIONLISTSPLIT = "GetConversationListSplit",
    GETONECONVERSATION = "GetOneConversation",
    GETCONVERSATIONIDBYSESSIONTYPE = "GetConversationIDBySessionType",
    GETMULTIPLECONVERSATION = "GetMultipleConversation",
    DELETECONVERSATION = "DeleteConversation",
    SETCONVERSATIONDRAFT = "SetConversationDraft",
    PINCONVERSATION = "PinConversation",
    GETTOTALUNREADMSGCOUNT = "GetTotalUnreadMsgCount",
    GETCONVERSATIONRECVMESSAGEOPT = "GetConversationRecvMessageOpt",
    SETCONVERSATIONRECVMESSAGEOPT = "SetConversationRecvMessageOpt",
    SEARCHLOCALMESSAGES = "SearchLocalMessages",
    MARKGROUPMESSAGEHASREAD = "MarkGroupMessageHasRead",
    MARKGROUPMESSAGEASREAD = "MarkGroupMessageAsRead",
    INVITEUSERTOGROUP = "InviteUserToGroup",
    KICKGROUPMEMBER = "KickGroupMember",
    GETGROUPMEMBERSINFO = "GetGroupMembersInfo",
    GETGROUPMEMBERLIST = "GetGroupMemberList",
    GETGROUPMEMBERLISTBYJOINTIME = "GetGroupMemberListByJoinTime",
    GETJOINEDGROUPLIST = "GetJoinedGroupList",
    CREATEGROUP = "CreateGroup",
    SETGROUPINFO = "SetGroupInfo",
    SETGROUPMEMBERNICKNAME = "SetGroupMemberNickname",
    GETGROUPSINFO = "GetGroupsInfo",
    JOINGROUP = "JoinGroup",
    SEARCHGROUPS = "SearchGroups",
    QUITGROUP = "QuitGroup",
    DISMISSGROUP = "DismissGroup",
    CHANGEGROUPMUTE = "ChangeGroupMute",
    CHANGEGROUPMEMBERMUTE = "ChangeGroupMemberMute",
    TRANSFERGROUPOWNER = "TransferGroupOwner",
    GETSENDGROUPAPPLICATIONLIST = "GetSendGroupApplicationList",
    GETRECVGROUPAPPLICATIONLIST = "GetRecvGroupApplicationList",
    ACCEPTGROUPAPPLICATION = "AcceptGroupApplication",
    REFUSEGROUPAPPLICATION = "RefuseGroupApplication",
    SIGNAL_INGINVITE = "SignalingInvite",
    SIGNALINGINVITEINGROUP = "SignalingInviteInGroup",
    SIGNALINGACCEPT = "SignalingAccept",
    SIGNALINGREJECT = "SignalingReject",
    SIGNALINGCANCEL = "SignalingCancel",
    SIGNALINGHUNGUP = "SignalingHungUp",
    GETSUBDEPARTMENT = "GetSubDepartment",
    GETDEPARTMENTMEMBER = "GetDepartmentMember",
    GETUSERINDEPARTMENT = "GetUserInDepartment",
    GETDEPARTMENTMEMBERANDSUBDEPARTMENT = "GetDepartmentMemberAndSubDepartment",
    GETDEPARTMENTINFO = "GetDepartmentInfo",
    SEARCHORGANIZATION = "SearchOrganization",
    RESETCONVERSATIONGROUPATTYPE = "ResetConversationGroupAtType",
    SETGROUPMEMBERROLELEVEL = "SetGroupMemberRoleLevel",
    SETGROUPVERIFICATION = "SetGroupVerification",
    SETGLOBALRECVMESSAGEOPT = "SetGlobalRecvMessageOpt"
}
