import { HederaStatusError } from "./errors/HederaStatusError";

export class Status {
    public static readonly Ok = new Status(0);
    public static readonly InvalidTransaction = new Status(1);
    public static readonly PayerAccountNotFound = new Status(2);
    public static readonly InvalidNodeAccount = new Status(3);
    public static readonly TransactionExpired = new Status(4);
    public static readonly InvalidTransactionStart = new Status(5);
    public static readonly InvalidTransactionDuration = new Status(6);
    public static readonly InvalidSignature = new Status(7);
    public static readonly MemoTooLong = new Status(8);
    public static readonly InsufficientTxFee = new Status(9);
    public static readonly InsufficientPayerBalance = new Status(10);
    public static readonly DuplicateTransaction = new Status(11);
    public static readonly Busy = new Status(12);
    public static readonly NotSupported = new Status(13);
    public static readonly InvalidFileId = new Status(14);
    public static readonly InvalidAccountId = new Status(15);
    public static readonly InvalidContractId = new Status(16);
    public static readonly InvalidTransactionId = new Status(17);
    public static readonly ReceiptNotFound = new Status(18);
    public static readonly RecordNotFound = new Status(19);
    public static readonly InvalidSolidityId = new Status(20);
    public static readonly Unknown = new Status(21);
    public static readonly Success = new Status(22);
    public static readonly FailInvalid = new Status(23);
    public static readonly FailFee = new Status(24);
    public static readonly FailBalance = new Status(25);
    public static readonly KeyRequired = new Status(26);
    public static readonly BadEncoding = new Status(27);
    public static readonly InsufficientAccountBalance = new Status(28);
    public static readonly InvalidSolidityAddress = new Status(29);
    public static readonly InsufficientGas = new Status(30);
    public static readonly ContractSizeLimitExceeded = new Status(31);
    public static readonly LocalCallModificationException = new Status(32);
    public static readonly ContractRevertExecuted = new Status(33);
    public static readonly ContractExecutionException = new Status(34);
    public static readonly InvalidReceivingNodeAccount = new Status(35);
    public static readonly MissingQueryHeader = new Status(36);
    public static readonly AccountUpdateFailed = new Status(37);
    public static readonly InvalidKeyEncoding = new Status(38);
    public static readonly NullSolidityAddress = new Status(39);
    public static readonly ContractUpdateFailed = new Status(40);
    public static readonly InvalidQueryHeader = new Status(41);
    public static readonly InvalidFeeSubmitted = new Status(42);
    public static readonly InvalidPayerSignature = new Status(43);
    public static readonly KeyNotProvided = new Status(44);
    public static readonly InvalidExpirationTime = new Status(45);
    public static readonly NoWaclKey = new Status(46);
    public static readonly FileContentEmpty = new Status(47);
    public static readonly InvalidAccountAmounts = new Status(48);
    public static readonly EmptyTransactionBody = new Status(49);
    public static readonly InvalidTransactionBody = new Status(50);
    public static readonly InvalidSignatureTypeMismatchingKey = new Status(51);
    public static readonly InvalidSignatureCountMismatchingKey = new Status(52);
    public static readonly EmptyClaimBody = new Status(53);
    public static readonly EmptyClaimHash = new Status(54);
    public static readonly EmptyClaimKeys = new Status(55);
    public static readonly InvalidClaimHashSize = new Status(56);
    public static readonly EmptyQueryBody = new Status(57);
    public static readonly EmptyClaimQuery = new Status(58);
    public static readonly ClaimNotFound = new Status(59);
    public static readonly AccountIdDoesNotExist = new Status(60);
    public static readonly ClaimAlreadyExists = new Status(61);
    public static readonly InvalidFileWacl = new Status(62);
    public static readonly SerializationFailed = new Status(63);
    public static readonly TransactionOversize = new Status(64);
    public static readonly TransactionTooManyLayers = new Status(65);
    public static readonly ContractDeleted = new Status(66);
    public static readonly PlatformNotActive = new Status(67);
    public static readonly KeyPrefixMismatch = new Status(68);
    public static readonly PlatformTransactionNotCreated = new Status(69);
    public static readonly InvalidRenewalPeriod = new Status(70);
    public static readonly InvalidPayerAccountId = new Status(71);
    public static readonly AccountDeleted = new Status(72);
    public static readonly FileDeleted = new Status(73);
    public static readonly AccountRepeatedInAccountAmounts = new Status(74);
    public static readonly SettingNegativeAccountBalance = new Status(75);
    public static readonly ObtainerRequired = new Status(76);
    public static readonly ObtainerSameContractId = new Status(77);
    public static readonly ObtainerDoesNotExist = new Status(78);
    public static readonly ModifyingImmutableContract = new Status(79);
    public static readonly FileSystemException = new Status(80);
    public static readonly AutorenewDurationNotInRange = new Status(81);
    public static readonly ErrorDecodingBytestring = new Status(82);
    public static readonly ContractFileEmpty = new Status(83);
    public static readonly ContractBytecodeEmpty = new Status(84);
    public static readonly InvalidInitialBalance = new Status(85);
    public static readonly InvalidReceiveRecordThreshold = new Status(86);
    public static readonly InvalidSendRecordThreshold = new Status(87);
    public static readonly AccountIsNotGenesisAccount = new Status(88);
    public static readonly PayerAccountUnauthorized = new Status(89);
    public static readonly InvalidFreezeTransactionBody = new Status(90);
    public static readonly FreezeTransactionBodyNotFound = new Status(91);
    public static readonly TransferListSizeLimitExceeded = new Status(92);
    public static readonly ResultSizeLimitExceeded = new Status(93);
    public static readonly NotSpecialAccount = new Status(94);
    public static readonly ContractNegativeGas = new Status(95);
    public static readonly ContractNegativeValue = new Status(96);
    public static readonly InvalidFeeFile = new Status(97);
    public static readonly InvalidExchangeRateFile = new Status(98);
    public static readonly InsufficientLocalCallGas = new Status(99);
    public static readonly EntityNotAllowedToDelete = new Status(100);
    public static readonly AuthorizationFailed = new Status(101);
    public static readonly FileUploadedProtoInvalid = new Status(102);
    public static readonly FileUploadedProtoNotSavedToDisk = new Status(103);
    public static readonly FeeScheduleFilePartUploaded = new Status(104);
    public static readonly ExchangeRateChangeLimitExceeded = new Status(105);

    public readonly code: number;

    // NOT A STABLE API
    public constructor(code: number) {
        this.code = code;
    }

    public toString(): string {
        switch (this.code) {
            case Status.Ok.code: return "OK";
            case Status.InvalidTransaction.code: return "INVALID_TRANSACTION";
            case Status.PayerAccountNotFound.code: return "PAYER_ACCOUNT_NOT_FOUND";
            case Status.InvalidNodeAccount.code: return "INVALID_NODE_ACCOUNT";
            case Status.TransactionExpired.code: return "TRANSACTION_EXPIRED";
            case Status.InvalidTransactionStart.code: return "INVALID_TRANSACTION_START";
            case Status.InvalidTransactionDuration.code: return "INVALID_TRANSACTION_DURATION";
            case Status.InvalidSignature.code: return "INVALID_SIGNATURE";
            case Status.MemoTooLong.code: return "MEMO_TOO_LONG";
            case Status.InsufficientTxFee.code: return "INSUFFICIENT_TX_FEE";
            case Status.InsufficientPayerBalance.code: return "INSUFFICIENT_PAYER_BALANCE";
            case Status.DuplicateTransaction.code: return "DUPLICATE_TRANSACTION";
            case Status.Busy.code: return "BUSY";
            case Status.NotSupported.code: return "NOT_SUPPORTED";
            case Status.InvalidFileId.code: return "INVALID_FILE_ID";
            case Status.InvalidAccountId.code: return "INVALID_ACCOUNT_ID";
            case Status.InvalidContractId.code: return "INVALID_CONTRACT_ID";
            case Status.InvalidTransactionId.code: return "INVALID_TRANSACTION_ID";
            case Status.ReceiptNotFound.code: return "RECEIPT_NOT_FOUND";
            case Status.RecordNotFound.code: return "RECORD_NOT_FOUND";
            case Status.InvalidSolidityId.code: return "INVALID_SOLIDITY_ID";
            case Status.Unknown.code: return "UNKNOWN";
            case Status.Success.code: return "SUCCESS";
            case Status.FailInvalid.code: return "FAIL_INVALID";
            case Status.FailFee.code: return "FAIL_FEE";
            case Status.FailBalance.code: return "FAIL_BALANCE";
            case Status.KeyRequired.code: return "KEY_REQUIRED";
            case Status.BadEncoding.code: return "BAD_ENCODING";
            case Status.InsufficientAccountBalance.code: return "INSUFFICIENT_ACCOUNT_BALANCE";
            case Status.InvalidSolidityAddress.code: return "INVALID_SOLIDITY_ADDRESS";
            case Status.InsufficientGas.code: return "INSUFFICIENT_GAS";
            case Status.ContractSizeLimitExceeded.code: return "CONTRACT_SIZE_LIMIT_EXCEEDED";
            case Status.LocalCallModificationException.code: return "LOCAL_CALL_MODIFICATION_EXCEPTION";
            case Status.ContractRevertExecuted.code: return "CONTRACT_REVERT_EXECUTED";
            case Status.ContractExecutionException.code: return "CONTRACT_EXECUTION_EXCEPTION";
            case Status.InvalidReceivingNodeAccount.code: return "INVALID_RECEIVING_NODE_ACCOUNT";
            case Status.MissingQueryHeader.code: return "MISSING_QUERY_HEADER";
            case Status.AccountUpdateFailed.code: return "ACCOUNT_UPDATE_FAILED";
            case Status.InvalidKeyEncoding.code: return "INVALID_KEY_ENCODING";
            case Status.NullSolidityAddress.code: return "NULL_SOLIDITY_ADDRESS";
            case Status.ContractUpdateFailed.code: return "CONTRACT_UPDATE_FAILED";
            case Status.InvalidQueryHeader.code: return "INVALID_QUERY_HEADER";
            case Status.InvalidFeeSubmitted.code: return "INVALID_FEE_SUBMITTED";
            case Status.InvalidPayerSignature.code: return "INVALID_PAYER_SIGNATURE";
            case Status.KeyNotProvided.code: return "KEY_NOT_PROVIDED";
            case Status.InvalidExpirationTime.code: return "INVALID_EXPIRATION_TIME";
            case Status.NoWaclKey.code: return "NO_WACL_KEY";
            case Status.FileContentEmpty.code: return "FILE_CONTENT_EMPTY";
            case Status.InvalidAccountAmounts.code: return "INVALID_ACCOUNT_AMOUNTS";
            case Status.EmptyTransactionBody.code: return "EMPTY_TRANSACTION_BODY";
            case Status.InvalidTransactionBody.code: return "INVALID_TRANSACTION_BODY";
            case Status.InvalidSignatureTypeMismatchingKey.code: return "INVALID_SIGNATURE_TYPE_MISMATCHING_KEY";
            case Status.InvalidSignatureCountMismatchingKey.code: return "INVALID_SIGNATURE_COUNT_MISMATCHING_KEY";
            case Status.EmptyClaimBody.code: return "EMPTY_CLAIM_BODY";
            case Status.EmptyClaimHash.code: return "EMPTY_CLAIM_HASH";
            case Status.EmptyClaimKeys.code: return "EMPTY_CLAIM_KEYS";
            case Status.InvalidClaimHashSize.code: return "INVALID_CLAIM_HASH_SIZE";
            case Status.EmptyQueryBody.code: return "EMPTY_QUERY_BODY";
            case Status.EmptyClaimQuery.code: return "EMPTY_CLAIM_QUERY";
            case Status.ClaimNotFound.code: return "CLAIM_NOT_FOUND";
            case Status.AccountIdDoesNotExist.code: return "ACCOUNT_ID_DOES_NOT_EXIST";
            case Status.ClaimAlreadyExists.code: return "CLAIM_ALREADY_EXISTS";
            case Status.InvalidFileWacl.code: return "INVALID_FILE_WACL";
            case Status.SerializationFailed.code: return "SERIALIZATION_FAILED";
            case Status.TransactionOversize.code: return "TRANSACTION_OVERSIZE";
            case Status.TransactionTooManyLayers.code: return "TRANSACTION_TOO_MANY_LAYERS";
            case Status.ContractDeleted.code: return "CONTRACT_DELETED";
            case Status.PlatformNotActive.code: return "PLATFORM_NOT_ACTIVE";
            case Status.KeyPrefixMismatch.code: return "KEY_PREFIX_MISMATCH";
            case Status.PlatformTransactionNotCreated.code: return "PLATFORM_TRANSACTION_NOT_CREATED";
            case Status.InvalidRenewalPeriod.code: return "INVALID_RENEWAL_PERIOD";
            case Status.InvalidPayerAccountId.code: return "INVALID_PAYER_ACCOUNT_ID";
            case Status.AccountDeleted.code: return "ACCOUNT_DELETED";
            case Status.FileDeleted.code: return "FILE_DELETED";
            case Status.AccountRepeatedInAccountAmounts.code: return "ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS";
            case Status.SettingNegativeAccountBalance.code: return "SETTING_NEGATIVE_ACCOUNT_BALANCE";
            case Status.ObtainerRequired.code: return "OBTAINER_REQUIRED";
            case Status.ObtainerSameContractId.code: return "OBTAINER_SAME_CONTRACT_ID";
            case Status.ObtainerDoesNotExist.code: return "OBTAINER_DOES_NOT_EXIST";
            case Status.ModifyingImmutableContract.code: return "MODIFYING_IMMUTABLE_CONTRACT";
            case Status.FileSystemException.code: return "FILE_SYSTEM_EXCEPTION";
            case Status.AutorenewDurationNotInRange.code: return "AUTORENEW_DURATION_NOT_IN_RANGE";
            case Status.ErrorDecodingBytestring.code: return "ERROR_DECODING_BYTESTRING";
            case Status.ContractFileEmpty.code: return "CONTRACT_FILE_EMPTY";
            case Status.ContractBytecodeEmpty.code: return "CONTRACT_BYTECODE_EMPTY";
            case Status.InvalidInitialBalance.code: return "INVALID_INITIAL_BALANCE";
            case Status.InvalidReceiveRecordThreshold.code: return "INVALID_RECEIVE_RECORD_THRESHOLD";
            case Status.InvalidSendRecordThreshold.code: return "INVALID_SEND_RECORD_THRESHOLD";
            case Status.AccountIsNotGenesisAccount.code: return "ACCOUNT_IS_NOT_GENESIS_ACCOUNT";
            case Status.PayerAccountUnauthorized.code: return "PAYER_ACCOUNT_UNAUTHORIZED";
            case Status.InvalidFreezeTransactionBody.code: return "INVALID_FREEZE_TRANSACTION_BODY";
            case Status.FreezeTransactionBodyNotFound.code: return "FREEZE_TRANSACTION_BODY_NOT_FOUND";
            case Status.TransferListSizeLimitExceeded.code: return "TRANSFER_LIST_SIZE_LIMIT_EXCEEDED";
            case Status.ResultSizeLimitExceeded.code: return "RESULT_SIZE_LIMIT_EXCEEDED";
            case Status.NotSpecialAccount.code: return "NOT_SPECIAL_ACCOUNT";
            case Status.ContractNegativeGas.code: return "CONTRACT_NEGATIVE_GAS";
            case Status.ContractNegativeValue.code: return "CONTRACT_NEGATIVE_VALUE";
            case Status.InvalidFeeFile.code: return "INVALID_FEE_FILE";
            case Status.InvalidExchangeRateFile.code: return "INVALID_EXCHANGE_RATE_FILE";
            case Status.InsufficientLocalCallGas.code: return "INSUFFICIENT_LOCAL_CALL_GAS";
            case Status.EntityNotAllowedToDelete.code: return "ENTITY_NOT_ALLOWED_TO_DELETE";
            case Status.AuthorizationFailed.code: return "AUTHORIZATION_FAILED";
            case Status.FileUploadedProtoInvalid.code: return "FILE_UPLOADED_PROTO_INVALID";
            case Status.FileUploadedProtoNotSavedToDisk.code: return "FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK";
            case Status.FeeScheduleFilePartUploaded.code: return "FEE_SCHEDULE_FILE_PART_UPLOADED";
            case Status.ExchangeRateChangeLimitExceeded.code: return "EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED";
            default: return "UNKNOWN STATUS CODE (4120)";
        }
    }

    // NOT A STABLE API
    public _isBusy(): boolean {
        return Status.Busy.code === this.code;
    }

    // NOT A STABLE API
    public _isError(): boolean {
        switch (this.code) {
            case Status.Success.code:
            case Status.Ok.code:
                return false;

            case Status.Unknown.code:
            case Status.ReceiptNotFound.code:
            case Status.RecordNotFound.code:
                return true;

            default:
                return true;
        }
    }

    // NOT A STABLE API
    public _throwIfError(): void {
        if (this._isError()) {
            throw new HederaStatusError(this);
        }
    }
}
