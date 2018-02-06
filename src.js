import React, { Component } from "react";
import {
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider
} from "recyclerlistview";

const metrics = {
  // MENU
  sideMenuWidth: 74,
  menuIconSize: 30,
  headerHeight: 64,
  androidStatusBar: 24,
  // old metrics
  navigationHeight: 44,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  smallMargin: 5,
  baseMargin: 10,
  cardMargin: 15,
  doubleBaseMargin: 20,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  buttonRadius: 4,
  filtersHeight: 60,
  baseScreenWidthNumerator: 8,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  text: {
    header: 20,
    basic: 14,
    largeHeader: 24,
    // old text values
    small: 10,
    large: 20,
    veryLarge: 25
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#00a1f1"
  },
  containerGridLeft: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffbb00"
  },
  containerGridRight: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#7cbb00"
  }
};

const colors = {
  mainBlue: "#EB4511",
  menuGrey: "#FAFAFA",
  darkGrey: "#727272",
  textGrey: "#393A3C",
  textLightGrey: "rgba(57, 58, 60, 0.5)",
  darkBlue: "#B02E0C",
  darkishBlue: "#B02E0C",
  lightGrey: "#F0F0F0",
  debianRed: "#EA1C5C",
  correctColor: "rgba(49, 193, 82, 0.1)",
  wrongColor: "rgba(215, 0, 0, 0.1)",
  warningColor: "rgba(122, 85, 255, 0.1)",
  loadingColor: "rgba(255, 192, 0, 0.1)",
  // old colors
  darkGray: "#555555",
  lightBlue: "#B02E0C",
  azureBlue: "#FC6722",
  amber: "#ffc400",
  white: "#FFFFFF",
  gray: "#CCCCCC",
  lightGray: "#EEEEEE",
  lightGreen: "#0F3"
};

const styles = {
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.menuGrey
  },
  flexDirectionRow: {
    flexDirection: "row"
  },
  flexCentered: {
    justifyContent: "center",
    alignItems: "center"
  },
  flexCenteredDirectionRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  stdButton: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8
  },
  blueButton: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#0068C2",
    alignItems: "center"
  },
  stdMoreButton: {
    paddingLeft: 12,
    paddingRight: 0,
    paddingTop: 8,
    paddingBottom: 8
  },
  stdHeaderTouchable: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 8
  },
  modalStyle: {},
  modalTextStyle: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12
  },
  modalDropdownTextStyle: {
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  modalDropdownTextHighlightStyle: {
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  searchBar: {
    width: 200
  },
  whiteScreenTitleHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 24,
    marginRight: 24,
    borderBottomWidth: 1,
    borderColor: "#E7E7EC",
    backgroundColor: "white"
  },
  screenTitleHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 24,
    marginRight: 24
  },
  screenSubheader: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "white",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderColor: "#E7E7EC"
  },
  // Typography
  stdButtonText: {
    fontSize: 14,
    color: "white"
  },
  blueButtonText: {
    fontSize: 14,
    lineHeight: 20,
    color: "white",
    fontWeight: "500",
    textAlign: "center"
  },
  smallText: {
    color: colors.textGrey,
    fontWeight: "normal",
    fontSize: metrics.text.small
  },
  smallBoldText: {
    color: colors.textGrey,
    fontWeight: "bold",
    fontSize: metrics.text.small
  },
  basicText: {
    color: colors.textGrey,
    fontWeight: "normal",
    fontSize: metrics.text.basic
  },
  basicRightText: {
    color: colors.textGrey,
    fontWeight: "normal",
    fontSize: metrics.text.basic,
    textAlign: "right"
  },
  basicLightText: {
    color: colors.textLightGrey,
    fontWeight: "normal",
    fontSize: metrics.text.basic
  },
  basicRightLightText: {
    color: colors.textLightGrey,
    fontWeight: "normal",
    fontSize: metrics.text.basic,
    textAlign: "right"
  },
  basicBoldText: {
    color: colors.textGrey,
    fontWeight: "bold",
    fontSize: metrics.text.basic
  },
  basicRightBoldText: {
    color: colors.textGrey,
    fontWeight: "bold",
    fontSize: metrics.text.basic,
    textAlign: "right"
  },
  largeText: {
    color: colors.darkGray,
    fontWeight: "bold",
    fontSize: metrics.text.large
  },
  veryLargeText: {
    color: colors.textGrey,
    fontWeight: "bold",
    fontSize: metrics.text.veryLarge
  },
  whiteHeaderText: {
    color: "white",
    fontSize: metrics.text.header
  },
  titleHeaderText: {
    color: colors.textGrey,
    fontSize: metrics.text.largeHeader,
    lineHeight: 32
  },
  // Text
  centeredText: {
    color: colors.textGrey,
    fontWeight: "normal",
    fontSize: metrics.text.basic,
    textAlign: "center"
  },
  okText: {
    color: "green",
    fontWeight: "normal",
    fontSize: metrics.text.basic
  },
  loadingText: {
    color: "orange",
    fontWeight: "normal",
    fontSize: metrics.text.basic
  },
  errorText: {
    color: "red",
    fontWeight: "normal",
    fontSize: metrics.text.basic
  },
  purpleText: {
    color: "purple",
    fontWeight: "normal",
    fontSize: metrics.text.basic
  },
  // Table
  tableHeader: {
    minHeight: 52,
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: colors.menuGrey,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    marginLeft: 24,
    marginRight: 24
  },
  headerCell: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  wideHeaderCell: {
    flex: 2,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  tableRow: {
    minHeight: 52,
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    marginLeft: 24,
    marginRight: 24
  },
  tableCell: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  redTableCell: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: colors.wrongColor
  },
  purpleTableCell: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: colors.warningColor
  },
  greenTableCell: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: colors.correctColor
  },
  yellowTableCell: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: colors.loadingColor
  },
  tableWideCell: {
    flex: 2,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  firstTableCell: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: "stretch",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderLeftColor: colors.lightGray
  },
  firstTableWideCell: {
    flex: 2,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: "stretch",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderLeftColor: colors.lightGray
  },
  lastTableCell: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: "stretch",
    justifyContent: "center",
    borderRightWidth: 2,
    borderRightColor: colors.lightGray
  },
  lastTableWideCell: {
    flex: 2,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: "stretch",
    justifyContent: "center",
    borderRightWidth: 2,
    borderRightColor: colors.lightGray
  },
  tableIconCell: {
    flex: 1,
    flexDirection: "row",
    maxWidth: 90,
    minWidth: 90,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  lastTableIconCell: {
    flex: 1,
    flexDirection: "row",
    maxWidth: 90,
    minWidth: 90,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: colors.lightGray
  },
  // List
  list: {
    marginBottom: metrics.androidStatusBar
  },
  listContent: {
    paddingBottom: 130
  }
};

class ChargeIcons extends Component<Props, void> {
  shouldComponentUpdate = (nextProps: Object) => {
    const equality = isEqual(
      [
        this.props.obligatoryAdjustments,
        this.props.obligatoryTrainings,
        this.props.payedObligatoryTrainings,
        this.props.chargeMember.id
      ],
      [
        nextProps.obligatoryAdjustments,
        nextProps.obligatoryTrainings,
        nextProps.payedObligatoryTrainings,
        nextProps.chargeMember.id
      ]
    );
    return !equality;
  };

  render() {
    const { chargeMember } = this.props;
    return (
      <View style={styles.lastTableIconCell}>
        <View style={styles.blueTableCell}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              this.props.eventMainNavigation.navigate(
                "AdditionalPaymentsScreen",
                {
                  chargeMemberId: chargeMember.id,
                  chargeMember
                }
              );
            }}
          >
            <View style={styles.iconContainer}>
              <Text>Icon</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.orangeTableCell}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              this.props.eventMainNavigation.navigate(
                "TrainingPaymentsScreen",
                {
                  chargeMemberId: chargeMember.id,
                  chargeMember
                }
              );
            }}
          >
            <View style={styles.iconContainer}>
              <Text>Icon</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class ChargeSums extends Component<Props, void> {
  shouldComponentUpdate = (nextProps: Object) => {
    const equality = isEqual(this.props.sums, nextProps.sums);
    return !equality;
  };

  /**
   * Long press delay [ms]
   */
  pressDelay = 1300;

  sendAllPayments = (obligatoryCharges: Array<Object>) => {
    this.props.setStateForLongPressed();
    // For every obligatory charge that is correctly not payed send payCharge mutation onLongPress
    obligatoryCharges.forEach(membershipCharge => {
      const { price, amount_paid } = membershipCharge;
      if (
        amount_paid.amount === 0 &&
        price.amount !== 0 &&
        !this.props.findPending(membershipCharge.id)
      ) {
        this.props.sendPayment({
          membershipChargeId: membershipCharge.id,
          amount: price.amount,
          currency: price.currency,
          priceId: price.id,
          eventChargeId: membershipCharge.event_charge_id
        });
      }
    });
  };

  renderCurrencySum = ({ sum, key }: { sum: Object, key: string }) => (
    <View key={key} style={styles.amountContainer}>
      <Text
        // style={sums[key].price === sums[key].amountPaid ? styles.okText : styles.errorText}
        style={styles.basicRightBoldText}
      >
        {sum.price}
      </Text>
      <Text style={styles.basicRightText}> {key}</Text>
    </View>
  );

  render() {
    const { sums, obligatoryCharges } = this.props;
    return (
      <View style={styles.tableCell}>
        <TouchableNativeFeedback
          useForeground
          style={styles.touchableOpacity}
          delayLongPress={this.pressDelay}
          delayPressIn={200}
          delayPressOut={0}
          onLongPress={() => {
            this.sendAllPayments(obligatoryCharges);
          }}
          onPressIn={this.props.setStateForPressIn}
          onPressOut={this.props.setStateForPressOut}
        >
          <View style={styles.amountContainer}>
            {/* Show sums of all charges in currencies */}
            {Object.keys(sums).map(key =>
              this.renderCurrencySum({ sum: sums[key], key })
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

class MembershipCharge extends Component<Props, void> {
  shouldComponentUpdate = (nextProps: Object) => {
    const equality = isEqual(
      [this.props.charge, this.props.pending, this.props.chargeMember.id],
      [nextProps.charge, nextProps.pending, nextProps.chargeMember.id]
    );
    return !equality;
  };
  /**
   * Long press delay [ms]
   */
  pressDelay = 1300;

  /**
   * Find cell state for MembershipCharge
   */
  findCellState = ({
    membershipCharge,
    pending
  }: {
    membershipCharge: Object,
    pending: boolean
  }) => {
    const { price, amount_paid, type } = membershipCharge;
    if (pending) {
      return styles.yellowTableCell;
    } else if (
      price.amount === amount_paid.amount ||
      type === "obligatory_paid_in_system"
    ) {
      return styles.greenTableCell;
    } else if (
      amount_paid.amount !== 0 &&
      amount_paid.amount !== price.amount
    ) {
      return styles.purpleTableCell;
    }
    return styles.redTableCell;
  };

  /**
   * Render cell content for MembershipCharge
   */
  findCellContent = (membershipCharge: Object) => {
    const cellInside =
      membershipCharge.type === "obligatory_paid_in_system" ? (
        <Text style={styles.basicRightBoldText}>SYS</Text>
      ) : (
        <View>
          <Text style={styles.basicRightBoldText}>
            {membershipCharge.price.amount}
          </Text>
          <Text style={styles.basicRightText}>
            {" "}
            {membershipCharge.price.currency}
          </Text>
        </View>
      );
    return <View style={styles.amountContainer}>{cellInside}</View>;
  };

  /**
   * Find if cell content is touchable for MembershipCharge
   */
  findTouchable = ({
    membershipCharge,
    pending
  }: {
    membershipCharge: Object,
    pending: boolean
  }) =>
    !(
      pending ||
      (membershipCharge.price.amount === 0 &&
        membershipCharge.amount_paid.amount === 0) ||
      membershipCharge.type === "obligatory_paid_in_system"
    );

  /**
   * Long press action for single charge - main logic
   */
  decideLongPressAction = () => {
    return null;
  };

  render() {
    const { charge, pending } = this.props;
    const { amount_paid, price } = charge;
    // If charge is not null, proceed to render table cell
    if (price.amount !== null && amount_paid.amount !== null) {
      const cellStyle = this.findCellState({
        membershipCharge: charge,
        pending
      });
      const cellContent = this.findCellContent(charge);
      // If table cell is touchable, proceed to render TouchableOpacity
      if (this.findTouchable({ membershipCharge: charge, pending })) {
        return (
          <View style={cellStyle}>
            <TouchableNativeFeedback
              useForeground
              style={styles.touchableOpacity}
              delayLongPress={this.pressDelay}
              delayPressIn={350}
              delayPressOut={0}
              onLongPress={() => {
                this.decideLongPressAction();
              }}
              onPressIn={this.props.setStateForPressIn}
              onPressOut={this.props.setStateForPressOut}
            >
              {cellContent}
            </TouchableNativeFeedback>
          </View>
        );
      }
      // If table cell isn't touchable, render normal table cell
      return (
        <View key={charge.id} style={cellStyle}>
          {cellContent}
        </View>
      );
    }
    // If charge is null, fallback to empty table cell
    return <View key={charge.id} style={styles.tableCell} />;
  }
}

class TransportPaymentsListItem extends Component<Props> {
  shouldComponentUpdate = (nextProps: Object) => {
    const equality = isEqual(
      [
        this.props.pendingPayments,
        this.props.chargeMember,
        this.props.obligatoryChargeNames
      ],
      [
        nextProps.pendingPayments,
        nextProps.chargeMember,
        nextProps.obligatoryChargeNames
      ]
    );
    return !equality;
  };

  /**
   * Long press delay [ms]
   */
  pressDelay = 1300;

  /**
   * Filters out pending charges for MembershipCharge
   */
  findPending = (chargeId: number) => {
    const { pendingPayments } = this.props;
    return (
      pendingPayments.filter(
        pendingPayment => pendingPayment.membershipChargeId === chargeId
      ).length > 0
    );
  };

  /**
   * State after long press reported
   */
  setStateForLongPressed = () => {
    return null;
  };

  /**
   * State after press in
   */
  setStateForPressIn = () => {
    return null;
  };

  /**
   * State after press out
   */
  setStateForPressOut = () => {
    return null;
  };

  /**
   * Calculates sums for table row for MemberCharge
   */
  calculatedSums = (obligatoryCharges: Array<Object>) => {
    const sums = {};
    obligatoryCharges.forEach(membershipCharge => {
      const { currency } = membershipCharge.price;
      const priceAmount = membershipCharge.price.amount;
      const amountPaidAmount = membershipCharge.amount_paid.amount;

      sums[currency] = sums[currency] || {};
      sums[currency].price = sums[currency].price + priceAmount || priceAmount;
      sums[currency].amountPaid =
        sums[currency].amountPaid + amountPaidAmount || amountPaidAmount;

      sums[currency].error =
        amountPaidAmount !== 0 && priceAmount !== amountPaidAmount && true;
    });
    return sums;
  };

  /* Person name render */
  renderPersonName = (chargeMember: Object) => (
    <View style={styles.firstTableWideCell}>
      <Text>{chargeMember.member_full_name}</Text>
    </View>
  );

  /* Charges cell render */
  renderCharges = ({
    obligatoryChargeNames,
    obligatoryChargesWithSys,
    chargeMember
  }: {
    obligatoryChargeNames: Array<Object>,
    obligatoryChargesWithSys: Array<Object>,
    chargeMember: Object
  }) =>
    // For each obligatory charge name
    obligatoryChargeNames.map(obligatoryChargeName => {
      // Find coresponding charge value
      const matchingChargesForColumn = obligatoryChargesWithSys.filter(
        obligatoryCharge =>
          obligatoryCharge.event_charge_id === obligatoryChargeName.charge_id
      );
      // If search successful, proceed to render table cell
      if (matchingChargesForColumn.length === 1) {
        const charge = matchingChargesForColumn[0];

        const pending = this.findPending(charge.id);
        return (
          <MembershipCharge
            key={charge.id}
            charge={charge}
            pending={pending}
            chargeMember={chargeMember}
            setStateForLongPressed={this.setStateForLongPressed}
            setStateForPressIn={this.setStateForPressIn}
            setStateForPressOut={this.setStateForPressOut}
            eventMainNavigation={this.props.eventMainNavigation}
            sendPayment={this.props.sendPayment}
          />
        );
      }
      // If column search not successful, fallback to empty table cell
      return (
        <View
          key={obligatoryChargeName.event_charge_id}
          style={styles.tableCell}
        />
      );
    });

  /**
   * Render table row
   */
  render() {
    const {
      chargeMember,
      obligatoryChargeNames,
      sendPayment,
      eventMainNavigation
    } = this.props;

    /**
     *  Filters obligatory and obligatory_paid_in_system charges for ChargeMember
     */
    const obligatoryChargesWithSys = this.props.chargeMember.membership_charges.filter(
      membershipCharge =>
        membershipCharge.type === "obligatory" ||
        membershipCharge.type === "obligatory_paid_in_system"
    );

    /**
     *  Filters obligatory charges for ChargeMember
     */
    const obligatoryCharges = obligatoryChargesWithSys.filter(
      membershipCharge => membershipCharge.type === "obligatory"
    );

    /**
     *  Filters obligatory adjustments for ChargeMember
     */
    const obligatoryAdjustments = this.props.chargeMember.membership_charges.filter(
      membershipCharge =>
        membershipCharge.type === "optional" &&
        membershipCharge.obligatory === true
    );

    /**
     *  Filters obligatory trainings for ChargeMember
     */
    const obligatoryTrainings = this.props.chargeMember.membership_charges.filter(
      membershipCharge =>
        membershipCharge.type === "training" &&
        membershipCharge.obligatory === true
    );

    /**
     *  Filters paid obligatory adjustments for ChargeMember
     */
    const payedObligatoryTrainings = obligatoryTrainings.filter(
      obligatoryTraining =>
        obligatoryTraining.price.amount ===
        obligatoryTraining.amount_paid.amount
    );

    const sums = this.calculatedSums(obligatoryCharges);
    return (
      <View key={chargeMember.id} style={styles.tableRow}>
        {this.renderPersonName(chargeMember)}
        {this.renderCharges({
          obligatoryChargeNames,
          obligatoryChargesWithSys,
          chargeMember
        })}
        <ChargeSums
          sums={sums}
          obligatoryCharges={obligatoryCharges}
          setStateForLongPressed={this.setStateForLongPressed}
          setStateForPressIn={this.setStateForPressIn}
          setStateForPressOut={this.setStateForPressOut}
          findPending={this.findPending}
          sendPayment={sendPayment}
        />
        <ChargeIcons
          obligatoryAdjustments={obligatoryAdjustments}
          obligatoryTrainings={obligatoryTrainings}
          payedObligatoryTrainings={payedObligatoryTrainings}
          chargeMember={chargeMember}
          eventMainNavigation={eventMainNavigation}
        />
      </View>
    );
  }
}

class TransportPaymentsList extends Component<Props> {
  shouldComponentUpdate = (nextProps: Object) => {
    const equality = isEqual(
      [
        this.props.pendingPayments,
        ...this.props.currentData,
        this.props.obligatoryChargeNames
      ],
      [
        nextProps.pendingPayments,
        ...nextProps.currentData,
        nextProps.obligatoryChargeNames
      ]
    );
    return !equality;
  };

  /**
   * Key extractor for FlatList.
   */
  keyExtractor = (item: Object) => item.id;

  /**
   * Renders header for FlatList.
   */
  renderFlatListHeader = () => {
    const { obligatoryChargeNames } = this.props;
    const options = obligatoryChargeNames || [];
    return (
      <View style={styles.tableHeader}>
        <View style={styles.wideHeaderCell}>
          <Text style={styles.basicLightText}>Uczestnik</Text>
        </View>
        {options.map(option => (
          <View key={option.id} style={styles.headerCell}>
            <Text style={styles.basicRightLightText}>{option.name}</Text>
          </View>
        ))}
        <View style={styles.headerCell}>
          <Text style={styles.basicRightLightText}>Suma</Text>
        </View>
        <View style={styles.tableIconCell}>
          <Text style={styles.basicRightLightText}>Inne opcje</Text>
        </View>
      </View>
    );
  };

  findMemberPendingPayments = (membershipCharges: Array<Object>) => {
    const { pendingPayments } = this.props;
    const memberPendingPayments = [];
    membershipCharges.forEach(membershipCharge => {
      memberPendingPayments.push(
        ...pendingPayments.filter(
          pendingPayment =>
            pendingPayment.membershipChargeId === membershipCharge.id
        )
      );
    });
    return memberPendingPayments;
  };

  /**
   * Renders list table row.
   */
  renderTableRow = ({ item }: { item: Object }) => {
    const { eventMainNavigation, obligatoryChargeNames } = this.props;

    if (!item.membership_charges) {
      return null;
    }

    return (
      <TransportPaymentsListItem
        chargeMember={item}
        pendingPayments={this.findMemberPendingPayments(
          item.membership_charges
        )}
        obligatoryChargeNames={obligatoryChargeNames}
        sendPayment={this.props.sendPayment}
        setProgressBar={this.props.setProgressBar}
        eventMainNavigation={eventMainNavigation}
      />
    );
  };

  render() {
    const { currentData, queryNetworkStatus, queryRefetch } = this.props;
    console.log(currentData);
    const { width } = Dimensions.get("window");
    const { height } = Dimensions.get("window");
    return (
      <View style={{ width: width - 2, height: height - 150 }}>
        <RecycleTestComponent
          currentData={currentData}
          renderTableRow={this.renderTableRow}
        />
      </View>
    );
  }
}

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2
};

let containerCount = 0;

// eslint-disable-next-line
class CellContainer extends React.Component {
  constructor(args) {
    super(args);
    this._containerId = containerCount++;
  }
  render() {
    return (
      <View {...this.props}>
        {this.props.children}
        <Text>Cell Id: {this._containerId}</Text>
      </View>
    );
  }
}

/** *
 * To test out just copy this component and render in you root component
 */
// eslint-disable-next-line
class RecycleTestComponent extends React.Component {
  constructor(args) {
    super(args);

    const { width } = Dimensions.get("window");

    // Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    // THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
    const dataProvider = new DataProvider((r1, r2) => isEqual(r1, r2));

    // Create the layout provider
    // First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
    // Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
    // If you need data based check you can access your data provider here
    // You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
    // NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
    this._layoutProvider = new LayoutProvider(
      () => ViewTypes.FULL,
      (type, dim) => {
        switch (type) {
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = 52;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    // Since component should always render once data has changed, make data provider part of the state
    this.state = {
      // dataProvider: dataProvider.cloneWithRows(this._generateArray(300)),
      dataProvider: dataProvider.cloneWithRows(this.props.currentData)
    };
  }

  _generateArray(n) {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = i;
    }
    return arr;
  }

  // Given type and data return the view component
  _rowRenderer(type, data) {
    // You can return any view here, CellContainer has no special significance
    switch (type) {
      case ViewTypes.FULL:
        return this.props.renderTableRow({ item: data });
      default:
        return null;
    }
  }

  render() {
    return (
      <RecyclerListView
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
      />
    );
  }
}

export const isEqual = (value: any, other: any) => {
  // Get the value type
  const type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  const valueLen =
    type === "[object Array]" ? value.length : Object.keys(value).length;
  const otherLen =
    type === "[object Array]" ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  const compare = (item1, item2) => {
    // Get the object type
    const itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    } else {
      // Otherwise, do a simple comparison
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === "[object Function]") {
        if (item1.toString() !== item2.toString()) return false;
      } else if (item1 !== item2) {
        return false;
      }
    }
    return true;
  };

  // Compare properties
  if (type === "[object Array]") {
    // eslint-disable-next-line
    for (let i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) {
        return false;
      }
    }
  } else {
    // eslint-disable-next-line
    for (const key in value) {
      // eslint-disable-next-line
      if (other.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) {
          return false;
        }
      }
    }
  }

  // If nothing failed, return true
  return true;
};

class TransportPayments extends Component {
  shouldComponentUpdate = (nextProps: Object) => {
    const equality = isEqual(
      [
        this.props.pendingPayments,
        this.props.currentData,
        this.props.obligatoryCharges
      ],
      [
        nextProps.pendingPayments,
        nextProps.currentData,
        nextProps.obligatoryCharges
      ]
    );
    return !equality;
  };

  /**
   * Function renders screen content.
   */
  render() {
    const {
      queryNetworkStatus,
      queryRefetch,
      obligatoryCharges,
      currentData,
      sendPayment,
      pendingPayments,
      eventMainNavigation
    } = this.props;

    return (
      <View style={styles.flexContainer}>
        <TransportPaymentsList
          queryNetworkStatus={queryNetworkStatus}
          queryRefetch={queryRefetch}
          currentData={currentData}
          obligatoryChargeNames={obligatoryCharges}
          sendPayment={sendPayment}
          pendingPayments={pendingPayments}
          eventMainNavigation={eventMainNavigation}
        />
      </View>
    );
  }
}

export default class PerformanceTest extends Component {
  constructor() {
    super();
    this.state = this.returnState();
  }

  returnState = (): State => {
    const dataOnce = JSON.parse(
      '{"id":"chargeMember_36812","member_id":"user_26036","member_full_name":"Doe John","membership_charges":[{"id":"chargeMembership_468_36812","charge_id":"2","event_charge_id":"468","name":"Szkolenie snowboardowe","type":"training","obligatory":false,"amount_paid":{"id":"amountAmountPaid_1069_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1069_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":[{"id":"attrSkillLevel_0","value":"0","name":"Nigdy nie miałem/am kontaktu z nartami/snowboardem","__typename":"Attribute"},{"id":"attrSkillLevel_1","value":"1","name":"Jeździłem/am 1-3 dni","__typename":"Attribute"},{"id":"attrSkillLevel_2","value":"2","name":"Jeździłem/am 4-6 dni","__typename":"Attribute"},{"id":"attrSkillLevel_3","value":"3","name":"Jeździłem/am 7-12 dni","__typename":"Attribute"},{"id":"attrSkillLevel_4","value":"4","name":"Jeździłem/am 13-20 dni","__typename":"Attribute"},{"id":"attrSkillLevel_5","value":"5","name":"Jeździłem/am 3-4 tygodnie","__typename":"Attribute"},{"id":"attrSkillLevel_6","value":"6","name":"Jeździłem/am 5-6 tygodni","__typename":"Attribute"},{"id":"attrSkillLevel_7","value":"7","name":"Jeździłem/am 7-9 tygodni","__typename":"Attribute"},{"id":"attrSkillLevel_8","value":"8","name":"Jeździłem/am 10 tygodni i więcej","__typename":"Attribute"}],"__typename":"MembershipCharge"},{"id":"chargeMembership_469_36812","charge_id":"3","event_charge_id":"469","name":"Szkolenie snowboardowe freestyle","type":"training","obligatory":false,"amount_paid":{"id":"amountAmountPaid_1071_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1071_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":[{"id":"attrSkillLevel_9","value":"9","name":"Nie miałem/am styczności z freestyle ale jakoś jeżdżę","__typename":"Attribute"},{"id":"attrSkillLevel_10","value":"10","name":"Nie miałem/am styczności z freestyle ale świetnie jeżdżę","__typename":"Attribute"},{"id":"attrSkillLevel_11","value":"11","name":"Robię skoki z grabem","__typename":"Attribute"},{"id":"attrSkillLevel_12","value":"12","name":"Robię 180° lub 360°","__typename":"Attribute"},{"id":"attrSkillLevel_13","value":"13","name":"Robię lepsze tricki","__typename":"Attribute"}],"__typename":"MembershipCharge"},{"id":"chargeMembership_470_36812","charge_id":"4","event_charge_id":"470","name":"Szkolenie narciarskie freestyle","type":"training","obligatory":false,"amount_paid":{"id":"amountAmountPaid_1073_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1073_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":[{"id":"attrSkillLevel_9","value":"9","name":"Nie miałem/am styczności z freestyle ale jakoś jeżdżę","__typename":"Attribute"},{"id":"attrSkillLevel_10","value":"10","name":"Nie miałem/am styczności z freestyle ale świetnie jeżdżę","__typename":"Attribute"},{"id":"attrSkillLevel_11","value":"11","name":"Robię skoki z grabem","__typename":"Attribute"},{"id":"attrSkillLevel_12","value":"12","name":"Robię 180° lub 360°","__typename":"Attribute"},{"id":"attrSkillLevel_13","value":"13","name":"Robię lepsze tricki","__typename":"Attribute"}],"__typename":"MembershipCharge"},{"id":"chargeMembership_467_36812","charge_id":"1","event_charge_id":"467","name":"Szkolenie narciarskie","type":"training","obligatory":false,"amount_paid":{"id":"amountAmountPaid_1067_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1067_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":[{"id":"attrSkillLevel_0","value":"0","name":"Nigdy nie miałem/am kontaktu z nartami/snowboardem","__typename":"Attribute"},{"id":"attrSkillLevel_1","value":"1","name":"Jeździłem/am 1-3 dni","__typename":"Attribute"},{"id":"attrSkillLevel_2","value":"2","name":"Jeździłem/am 4-6 dni","__typename":"Attribute"},{"id":"attrSkillLevel_3","value":"3","name":"Jeździłem/am 7-12 dni","__typename":"Attribute"},{"id":"attrSkillLevel_4","value":"4","name":"Jeździłem/am 13-20 dni","__typename":"Attribute"},{"id":"attrSkillLevel_5","value":"5","name":"Jeździłem/am 3-4 tygodnie","__typename":"Attribute"},{"id":"attrSkillLevel_6","value":"6","name":"Jeździłem/am 5-6 tygodni","__typename":"Attribute"},{"id":"attrSkillLevel_7","value":"7","name":"Jeździłem/am 7-9 tygodni","__typename":"Attribute"},{"id":"attrSkillLevel_8","value":"8","name":"Jeździłem/am 10 tygodni i więcej","__typename":"Attribute"}],"__typename":"MembershipCharge"},{"id":"chargeMembership_471_36812","charge_id":"9","event_charge_id":"471","name":"Kaucja AP","type":"obligatory","obligatory":true,"amount_paid":{"id":"amountAmountPaid_1075_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1075_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":null,"__typename":"MembershipCharge"},{"id":"chargeMembership_472_36812","charge_id":"10","event_charge_id":"472","name":"Taksa","type":"obligatory","obligatory":true,"amount_paid":{"id":"amountAmountPaid_1077_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1077_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":null,"__typename":"MembershipCharge"},{"id":"chargeMembership_473_36812","charge_id":"11","event_charge_id":"473","name":"Kaucja SKIPASS","type":"obligatory","obligatory":true,"amount_paid":{"id":"amountAmountPaid_1079_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1079_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":null,"__typename":"MembershipCharge"},{"id":"chargeMembership_476_36812","charge_id":"61","event_charge_id":"476","name":"Pościel i sprzątanie końcowe","type":"obligatory","obligatory":true,"amount_paid":{"id":"amountAmountPaid_1081_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1081_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":null,"__typename":"MembershipCharge"},{"id":"chargeMembership_475_36812","charge_id":"13","event_charge_id":"475","name":"Nadbagaż","type":"optional","obligatory":false,"amount_paid":{"id":"amountAmountPaid_1673_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1673_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":null,"__typename":"MembershipCharge"},{"id":"chargeMembership_477_36812","charge_id":"62","event_charge_id":"477","name":"Gosauer Ski Hire","type":"optional","obligatory":false,"amount_paid":{"id":"amountAmountPaid_1675_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"price":{"id":"amountPrice_1675_36812","amount":9,"currency":"EUR","__typename":"ChargeAmount"},"attributes_collection":null,"__typename":"MembershipCharge"}],"__typename":"ChargesMembers"}'
    );
    const data = [];
    for (let index = 0; index < 62; index += 1) {
      data.push({ ...dataOnce, id: `charge_${index}` });
    }
    const charges = JSON.parse(
      '[{"id":"chargeEvent_9","charge_id":"471","name":"Name","__typename":"Charge"},{"id":"chargeEvent_10","charge_id":"472","name":"Name","__typename":"Charge"},{"id":"chargeEvent_11","charge_id":"473","name":"Name","__typename":"Charge"},{"id":"chargeEvent_61","charge_id":"476","name":"Name","__typename":"Charge"}]'
    );
    return {
      charges,
      list: false,
      data
    };
  };

  render() {
    return (
      <ScrollView style={styles.flexContainer}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <View style={{ paddingTop: 15 }}>
            <TouchableNativeFeedback
              onPress={() => {
                this.setState(prevState => ({
                  ...prevState,
                  list: !prevState.list
                }));
              }}
            >
              <Text style={{ padding: 20, backgroundColor: "#AAC000" }}>
                Render List
              </Text>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={{ paddingLeft: 20, paddingTop: 15 }}>
          {this.state.list ? (
            <TransportPayments
              eventMainNavigation={{}}
              queryNetworkStatus={1}
              queryRefetch={() => {
                null;
              }}
              obligatoryCharges={this.state.charges}
              currentData={this.state.data}
              sendPayment={() => {
                null;
              }}
              pendingPayments={[]}
              progressBarStatus={1}
              progressBarColor={"#000000"}
            />
          ) : null}
        </View>
      </ScrollView>
    );
  }
}
